
export namespace IDeleteProductProtocol {
    export type Params = DeleteProductParams;
    export type Result = DeleteProductResult;
}

interface DeleteProductParams {
    id: number
}

interface DeleteProductResult {
    success: boolean;
    message: string;
}

export interface IDeleteProductProtocol {
    deleteProduct(params: IDeleteProductProtocol.Params): Promise<IDeleteProductProtocol.Result>
}