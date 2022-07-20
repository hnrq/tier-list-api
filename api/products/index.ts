import { VercelRequest, VercelResponse } from '@vercel/node';
import * as productControllers from '../controllers/product.controller';

export default async (
  { query: { url } }: VercelRequest,
  response: VercelResponse
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
