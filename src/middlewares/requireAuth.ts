import { RequestHandler } from 'express';

const requireAuth: RequestHandler = (req, res, next) => {
  if (!req.get('authorization')) return res.status(401).send('Unauthorized');
  next();
};

export default requireAuth;
