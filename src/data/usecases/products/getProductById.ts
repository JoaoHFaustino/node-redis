import { IGetProductByIdProtocol } from "@/domain/protocols/products";

export class GetProductById implements IGetProductByIdProtocol {
    getProductById(params: IGetProductByIdProtocol.Params): Promise<IGetProductByIdProtocol.Result> {
        throw new Error("Method not implemented.");
    }

}