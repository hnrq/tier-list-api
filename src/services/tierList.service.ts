import Product from '../types/Product';
import * as aliexpressService from './aliexpress.service';
import * as productModel from '../models/product.model';
import * as tierListModel from '../models/tierList.model';
import { getDomain, getProductId, isDomainSupported } from '../utils/url';

export const getProduct = async (url: URL) => {
  try {
    if (!isDomainSupported(url)) throw 'Domain not supported';

    const id = getProductId(url);
    let product = await productModel.getProduct(id);

    if (product) return product;

    switch (getDomain(url)) {
      case 'aliexpress.com': {
        product = aliexpressService.getProduct(id);
        break;
      }
    }

    await productModel.addProduct(product);
    return product;
  } catch (error) {
    throw error;
  }
};

export const addProductsToTierList = async (
  urls: string[],
  id: string
): Promise<Product[]> => {
  const products = await Promise.all(
    urls.map((url) => getProduct(new URL(url)))
  );

  return tierListModel.addProductsToTierList(products, id);
};
