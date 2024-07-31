import { IGetProductsProtocol } from "@/domain/protocols/products";

export class GetProducts implements IGetProductsProtocol {
    getProducts(params: IGetProductsProtocol.Params): Promise<IGetProductsProtocol.Result> {
        throw new Error("Method not implemented.");
    }
}