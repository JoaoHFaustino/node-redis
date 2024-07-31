import { IDeleteProductProtocol } from "@/domain/protocols/products";

export class DeleteProduct implements IDeleteProductProtocol {
    deleteProduct(params: IDeleteProductProtocol.Params): Promise<IDeleteProductProtocol.Result> {
        throw new Error("Method not implemented.");
    }

}