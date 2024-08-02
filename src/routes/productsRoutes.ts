import { Router } from "express";
import { ProductsController } from "@/controllers/products/productsController";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.post('/products', (req, res) => productsController.createProduct(req, res));
productsRoutes.get('/products', (req, res) => productsController.getProducts(req, res));
productsRoutes.get('/products/:id', (req, res) => productsController.getProductById(req, res));
productsRoutes.delete('/products/:id',(req, res) => productsController.deleteProduct(req, res));

export default productsRoutes