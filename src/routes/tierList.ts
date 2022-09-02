import bodyParser from 'body-parser';
import express from 'express';

import * as tierListController from '../controllers/tierList.controller';

const tierListRoutes = express.Router();

tierListRoutes.patch(
  '/:id',
  bodyParser.json(),
  tierListController.updateTierList
);

tierListRoutes.post('/', bodyParser.json(), tierListController.addTierList);

tierListRoutes.delete('/:id', tierListController.deleteTierList);

tierListRoutes.get('/:id', tierListController.getTierList);

// Product routes

tierListRoutes.post(
  '/:id/products',
  bodyParser.json(),
  tierListController.addProductsToTierList
);

tierListRoutes.delete(
  '/:id/products/:productId',
  tierListController.deleteProductFromTierList
);

export default tierListRoutes;
