import { Request, Response } from 'express';
import { AddProduct, DeleteProduct, GetProductById, GetProducts } from '@/data/usecases/products';

export class ProductsController {
    private addProductUseCase: AddProduct;
    private getProductsUseCase: GetProducts;
    private getProductByIdUseCase: GetProductById;
    private deleteProductUseCase: DeleteProduct;

    constructor() {
        this.addProductUseCase = new AddProduct();
        this.getProductsUseCase = new GetProducts();
        this.getProductByIdUseCase = new GetProductById();
        this.deleteProductUseCase = new DeleteProduct();
    }
    async createProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productData = req.body;
            const result = await this.addProductUseCase.addProduct(productData);
            if (!result.success) {
                return res.status(400).json({
                    message: 'Failed to create product'
                });
            }
            return res.status(201).json({
                message: result.message
            });
        } catch (error: any) {
            return res.status(500).json({
                message: 'Failed to create a product',
                error: error.message
            });
        }
    }

    async getProducts(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.getProductsUseCase.getProducts();

            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({
                message: 'Internal server error',
                error: error.message,
            });
        }
    }

    async getProductById(req: Request, res: Response): Promise<Response> {
        try {
            const productId = req.params.id
            const response = await this.getProductByIdUseCase.getProductById({ id: Number(productId) });

            if (!response) {
                return res.status(404).json({
                    message: 'Product not found'
                });
            }

            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({
                message: 'Internal server error',
                error: error.message,
            });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productId = req.params.id
            const result = await this.deleteProductUseCase.deleteProduct({ id: Number(productId) });
            if (!result.success) {
                return res.status(404).json({
                    message: result.message || 'Product not found or failed to delete'
                });
            }
            return res.status(204);
        } catch (error: any) {
            return res.status(500).json({
                message: 'Internal server error',
                error: error.message,
            });
        }
    }
}