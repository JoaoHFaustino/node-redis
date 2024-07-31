
export namespace IGetProductsProtocol {
    export type Params = GetProductsParams;
    export type Result = GetProductsResult;
}

interface GetProductsParams {
    id: number
}

interface GetProductsResult {
    products: Array<
        {
            id: number
            name: string
        }>
}

export interface IGetProductsProtocol {
    getProducts(params: IGetProductsProtocol.Params): Promise<IGetProductsProtocol.Result>
}