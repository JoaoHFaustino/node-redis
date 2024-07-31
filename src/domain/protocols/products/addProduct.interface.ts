
export namespace IAddProductProtocol {
    export type Params = AddProductParams;
    export type Result = void;
}

interface AddProductParams {
    id: number
    name: string
}

export interface IAddProductProtocol {
    addProduct(params: IAddProductProtocol.Params): Promise<IAddProductProtocol.Result>
}