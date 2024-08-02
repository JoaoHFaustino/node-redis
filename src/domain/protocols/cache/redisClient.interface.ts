export interface IRedisClient {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string | null>;
    getAll(): Promise<{ id: number, name: string }[]>;
    delete(key: string): Promise<void>;
  }
  