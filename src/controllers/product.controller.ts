import { getDomain, getProductId, isDomainSupported } from '../utils/url';
import * as aliexpressService from '../services/aliexpress.service';
import { Request, Response } from 'express';

export const getProduct = async (url: URL) => {
  try {
    if (!isDomainSupported(url)) throw 'Domain not supported';

    const productId = getProductId(url);
    switch (getDomain(url)) {
      case 'aliexpress.com':
        return aliexpressService.getProduct(productId);
    }
  } catch (error) {
    throw error;
  }
};

interface GetProductsParams {
  url: [];
}

export const getProducts = async (
  { query: { url } }: Request<any, any, any, GetProductsParams>,
  response: Response
) => {
  try {
    const urls: string[] = typeof url === 'string' ? [url] : url;
    if (urls.length === 0) throw 'A URL is required';

    const result = await Promise.all(
      urls.map((url) => getProduct(new URL(url)))
    );

    response.json(result);
  } catch (error) {
    console.error(error);
    response.status(400).send({ error });
  }
};
