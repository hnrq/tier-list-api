import express from 'express';

import * as tierListController from '../controllers/tierList.controller';
import requireAuth from '../middlewares/requireAuth';

const routes = express.Router();

routes.use(requireAuth);
routes.get('/', (_req, res) => {
  res.json({ message: 'working' });
});
routes.post(
  '/tier-list/:id/products',
  tierListController.addProductsToTierList
);

export default routes;
