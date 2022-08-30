import express from 'express';

import requireAuth from '../middlewares/requireAuth';
import productRouter from './product';
import tierListRouter from './tierList';

const routes = express.Router();

routes.use(requireAuth);
routes.get('/', (_req, res) => {
  res.json({ message: 'working' });
});

routes.use('/products', productRouter);

routes.use('/tier-lists', tierListRouter);

export default routes;
