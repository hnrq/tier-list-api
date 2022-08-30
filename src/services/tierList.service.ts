import _ from 'lodash';

import Product from '../types/Product';
import * as productService from './product.service';
import * as tierListModel from '../models/tierList.model';
import { definitions } from '../types/supabase';

export const getTierList = (id: string) => tierListModel.getTierList(id);

export const addTierList = (tierList: {
  title: string;
  description?: string;
}) => tierListModel.addTierList(tierList);

export const deleteTierList = (id: string) => tierListModel.deleteTierList(id);

export const addProductsToTierList = async (
  urls: string[],
  id: string
): Promise<Product[]> => {
  const { products, urlsNotFound } = await productService.getProductsByUrl(
    urls
  );
  let addedProducts: Product[] = [];

  if (urlsNotFound.length > 0)
    addedProducts = await productService.addProductsByUrl(urlsNotFound);

  return tierListModel.addProductsToTierList(id, [
    ...products,
    ...addedProducts,
  ]);
};

export const deleteProductFromTierList = async (
  id: string,
  productId: string
) => tierListModel.deleteProductFromTierList(id, productId);
