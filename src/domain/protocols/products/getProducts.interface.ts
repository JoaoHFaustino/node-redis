
export namespace IGetProductsProtocol {
    export type Result = GetProductsResult;
}
 

interface GetProductsResult {
    products: Array<
        {
            id: number
            name: string
        }>
}

export interface IGetProductsProtocol {
    getProducts(): Promise<IGetProductsProtocol.Result>
}