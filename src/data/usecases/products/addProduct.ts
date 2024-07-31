import { IAddProductProtocol } from "@/domain/protocols/products";

export class AddProduct implements IAddProductProtocol {
    addProduct(params: IAddProductProtocol.Params): Promise<IAddProductProtocol.Result> {
        throw new Error("Method not implemented.");
    }

} 