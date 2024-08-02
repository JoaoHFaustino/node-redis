import { IAddProductProtocol } from "@/domain/protocols/products";
import redisClient from "@/infra/cache/redisClient";

export class AddProduct implements IAddProductProtocol {
    async addProduct(params: IAddProductProtocol.Params): Promise<IAddProductProtocol.Result> {
        try {
            await redisClient.set(`product:${params.id}`, JSON.stringify(params), 7200);
            return { success: true, message: 'Product added successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to add product' };
        }
    }
}