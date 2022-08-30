import _ from 'lodash';
import * as aliexpressService from './aliexpress.service';
import type Product from '../types/Product';
import * as productModel from '../models/product.model';
import type { definitions } from '../types/supabase';
import { isDomainSupported, getProductId, getDomain } from '../utils/url';

const adaptFromDB = (product: definitions['product']): Product => ({
  ..._.omit(product, ['category_id', 'original_price', 'sale_price']),
  categoryId: product.category_id.toString(),
  originalPrice: product.original_price as Product['originalPrice'],
  salePrice: product.sale_price as Product['salePrice'],
  ratings: product.ratings as Product['ratings'],
  images: product.images as Product['images'],
});

const adaptToDB = (product: Product): definitions['product'] => ({
  ..._.omit(product, ['categoryId', 'originalPrice', 'salePrice']),
  category_id: Number(product.categoryId),
  original_price: product.originalPrice,
  sale_price: product.salePrice,
});

export const getProduct = async (id: string) => {
  try {
    const product = await productModel.getProduct(id);
    if (product !== null) return adaptFromDB(product);
    else return undefined;
  } catch (error) {
    throw error;
  }
};

export const addProducts = async (products: Product[]) =>
  await productModel.addProducts(products.map(adaptToDB));

export const getProductsByUrl = async (
  urls: string[]
): Promise<{ products: Product[]; urlsNotFound: string[] }> => {
  try {
    const products = await productModel.getProducts(
      urls.map((url) => `id.eq.${getProductId(new URL(url))}`).join(',')
    );

    if (products) {
      const foundProductIds = products.map(({ id }) => id);
      const urlsNotFound = urls.filter(
        (url) => !foundProductIds.includes(getProductId(new URL(url)))
      );

      return { products: products.map(adaptFromDB), urlsNotFound };
    }

    return { products: [], urlsNotFound: [] };
  } catch (error) {
    throw error;
  }
};

export const addProductsByUrl = async (urls: string[]) => {
  try {
    let products = _.compact(
      await Promise.all(
        urls.map((url) => {
          const urlObject = new URL(url);
          const id = getProductId(urlObject);

          if (!isDomainSupported(urlObject)) return undefined;

          switch (getDomain(urlObject)) {
            case 'aliexpress.com':
              return aliexpressService.getProduct(id);
          }
        })
      )
    );

    if (products.length > 0) await addProducts(products);
    return products;
  } catch (error) {
    throw error;
  }
};
