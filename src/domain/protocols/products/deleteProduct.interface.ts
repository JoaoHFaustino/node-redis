
export namespace IDeleteProductProtocol {
    export type Params = DeleteProductParams;
    export type Result = void;
}

interface DeleteProductParams {
    id: number
}

export interface IDeleteProductProtocol {
    deleteProduct(params: IDeleteProductProtocol.Params): Promise<IDeleteProductProtocol.Result>
}