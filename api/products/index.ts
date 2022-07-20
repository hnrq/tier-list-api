import { Request, Response } from 'express';
import * as productControllers from '../controllers/product.controller';

interface GetProductsParams {
  url: [];
}

export default async (
  { query: { url } }: Request<any, any, any, GetProductsParams>,
  response: Response
) => {
  try {
    const urls: string[] = typeof url === 'string' ? [url] : url;
    if (urls.length === 0) throw 'A URL is required';

    const result = await Promise.all(
      urls.map((url) => productControllers.getProduct(new URL(url)))
    );

    response.json(result);
  } catch (error) {
    console.error(error);
    response.status(400).send({ error });
  }
};
