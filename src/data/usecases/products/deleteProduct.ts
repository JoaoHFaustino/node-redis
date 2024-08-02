import { IDeleteProductProtocol } from "@/domain/protocols/products";
import redisClient from "@/infra/cache/redisClient";

export class DeleteProduct implements IDeleteProductProtocol {
    async deleteProduct(params: IDeleteProductProtocol.Params): Promise<IDeleteProductProtocol.Result> {
        try {
            const productKey = `product:${params.id}`;

            const product = await redisClient.get(productKey);
            if (!product) {
                return { success: false, message: 'Product not found' };
            }
            await redisClient.delete(productKey);
            return { success: true, message: 'Product deleted successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to delete product' };
        }
    }
}