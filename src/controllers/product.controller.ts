import * as productService from '../services/product.service';
import { Request, Response } from 'express';

export type GetProductParams = { id: string };

export const getProduct = async (
  { params: { id } }: Request<GetProductParams, never>,
  response: Response
) => {
  try {
    const product = await productService.getProduct(id);
    if (product === undefined) response.status(404).send('Not found');
    else response.status(200).json(product);
  } catch (error) {
    console.error(error);
    response.status(400).send({ error });
  }
};
