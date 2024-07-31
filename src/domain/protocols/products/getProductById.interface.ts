
export namespace IGetProductByIdProtocol {
    export type Params = GetProductByIdParams;
    export type Result = GetProductByIdResult;
}

interface GetProductByIdParams {
    id: number
}

interface GetProductByIdResult {
    id: number
    name: string
}

export interface IGetProductByIdProtocol {
    getProductById(params: IGetProductByIdProtocol.Params): Promise<IGetProductByIdProtocol.Result>
}