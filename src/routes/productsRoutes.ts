import { Router } from "express";

const productsRoutes = Router();

productsRoutes.post('/products')
productsRoutes.get('/products')
productsRoutes.get('/products/:id')
productsRoutes.delete('/products')

export default productsRoutes