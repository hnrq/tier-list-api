import bodyParser from 'body-parser';
import express from 'express';

import * as tierListController from '../controllers/tierList.controller';

const tierListRoutes = express.Router();

tierListRoutes.post(
  '/:id/products',
  bodyParser.json(),
  tierListController.addProductsToTierList
);

tierListRoutes.delete('/:id', tierListController.deleteTierList);

// tierListRoutes.patch('/:id', tierListController.updateTierList);

tierListRoutes.get('/:id', tierListController.getTierList);

tierListRoutes.delete(
  '/:id/products/:productId',
  tierListController.deleteProductFromTierList
);

export default tierListRoutes;
