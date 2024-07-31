import { IRedisClient } from '@/domain/protocols/cache/redisClient.interface';
import { createClient, RedisClientType } from 'redis';


class RedisClient implements IRedisClient {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: 'redis://127.0.0.1:6379'
    });

    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    this.client.on('error', (err) => {
      console.error('Redis error', err);
    });
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  async disconnect(): Promise<void> {
    await this.client.disconnect();
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
