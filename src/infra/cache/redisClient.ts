import { IRedisClient } from '@/domain/protocols/cache/redisClient.interface';
import { createClient, RedisClientType } from 'redis';

class RedisClient implements IRedisClient {
  private client: RedisClientType;
  private isConnected: boolean = false;

  constructor() {
    this.client = createClient({
      url: 'redis://127.0.0.1:6379'
    });

    this.client.on('connect', () => {
      this.isConnected = true;
      console.log('Connected to Redis');
    });

    this.client.on('error', (err) => {
      this.isConnected = false;
      console.error('Redis error', err);
    });

    this.connect();
  }

  async connect(): Promise<void> {
    if (!this.isConnected) {
      await this.client.connect();
    }
  }

  async disconnect(): Promise<void> {
    if (this.isConnected) {
      await this.client.disconnect();
      this.isConnected = false;
    }
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    if (!this.isConnected) {
      await this.connect();
    }
    if (ttlSeconds) {
      await this.client.set(key, value, {
        EX: ttlSeconds
      });
    } else {
      await this.client.set(key, value);
    }
  }

  async get(key: string): Promise<string | null> {
    if (!this.isConnected) {
      await this.connect();
    }
    return await this.client.get(key);
  }

  async getAllKeys(): Promise<string[]> {
    if (!this.isConnected) {
      await this.connect();
    }

    const keys: string[] = [];
    let cursor = 0;

    do {
      const reply = await this.client.scan(cursor);
      cursor = reply.cursor;
      keys.push(...reply.keys);
    } while (cursor !== 0);

    return keys;
  }

  async getAll(): Promise<{ id: number, name: string }[]> {
    const keys = await this.getAllKeys();
    const result: { id: number, name: string }[] = [];

    for (const key of keys) {
      const value = await this.get(key);
      if (value !== null) {
        result.push(JSON.parse(value));
      }
    }

    return result;
  }

  async delete(key: string): Promise<void> {
    if (!this.isConnected) {
      await this.connect();
    }
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
