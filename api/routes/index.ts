import express from 'express';

import * as productController from '../controllers/product.controller';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('working');
});
routes.get('/products', productController.getProducts);

export default routes;
