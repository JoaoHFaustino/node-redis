
export namespace IAddProductProtocol {
    export type Params = AddProductParams;
    export type Result = AddProductResult;
}

interface AddProductParams {
    id: number
    name: string
}

interface AddProductResult {
    success: boolean;
    message: string;
}

export interface IAddProductProtocol {
    addProduct(params: IAddProductProtocol.Params): Promise<IAddProductProtocol.Result>
}