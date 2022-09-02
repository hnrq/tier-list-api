import { RequestHandler } from 'express';
import supabase from '../db';

const requireAuth: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.get('Authorization');
    if (!authorization) return res.status(401).send('Unauthorized');

    const { user } = await supabase.auth.api.getUser(
      authorization.replace('Bearer ', '')
    );
    if (!user) return res.status(401).send('Unauthorized');

    next();
  } catch (e) {
    return res.status(401).send('Unauthorized');
  }
};

export default requireAuth;
