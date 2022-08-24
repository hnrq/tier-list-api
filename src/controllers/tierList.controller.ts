import * as tierListService from '../services/tierList.service';
import { Request, Response } from 'express';

export type AddProductsToTierListParams = { id: string };
export type AddProductsToTierListBody = { urls: string[] };

export const addProductsToTierList = async (
  {
    params: { id },
    body: { urls },
  }: Request<AddProductsToTierListParams, any, AddProductsToTierListBody>,
  response: Response
) => {
  try {
    if (urls.length === 0) throw 'A URL is required';
    return tierListService.addProductsToTierList(urls, id);
  } catch (error) {
    console.error(error);
    response.status(400).send({ error });
  }
};
