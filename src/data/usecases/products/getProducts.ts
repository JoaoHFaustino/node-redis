import { IGetProductsProtocol } from "@/domain/protocols/products";
import redisClient from "@/infra/cache/redisClient";

export class GetProducts implements IGetProductsProtocol {
  async getProducts(): Promise<IGetProductsProtocol.Result> {
    const products = await redisClient.getAll();
    return { products };
  }
}