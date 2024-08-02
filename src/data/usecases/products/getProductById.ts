import { IGetProductByIdProtocol } from "@/domain/protocols/products";
import redisClient from "@/infra/cache/redisClient";

export class GetProductById implements IGetProductByIdProtocol {
    async getProductById(params: IGetProductByIdProtocol.Params): Promise<IGetProductByIdProtocol.Result> {
        const productKey = `product:${params.id}`;
        const product = await redisClient.get(productKey);
        if (!product) {
            return null;
        }
        return JSON.parse(product);
    }
}