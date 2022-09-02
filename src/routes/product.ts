import express from 'express';

import * as productController from '../controllers/product.controller';

const productRoutes = express.Router();

productRoutes.get('/:id', productController.getProduct);

export default productRoutes;
