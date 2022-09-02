import * as tierListService from '../services/tierList.service';
import { Request, Response } from 'express';

export const getTierList = async (
  req: Request<{ id: string }, any, any>,
  res: Response
) => {
  try {
    const response = await tierListService.getTierList(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};

export const addTierList = async (
  req: Request<any, any, { title: string; description?: string }>,
  res: Response
) => {
  try {
    const response = await tierListService.addTierList(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};

export const updateTierList = async (
  req: Request<{ id: string }, any, { title: string; description?: string }>,
  res: Response
) => {
  try {
    const response = await tierListService.updateTierList(
      req.params.id,
      req.body
    );
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};

export const deleteTierList = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const response = await tierListService.deleteTierList(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};

export const addProductsToTierList = async (
  req: Request<{ id: string }, any, { urls: string[] }>,
  res: Response
) => {
  try {
    if (req.body.urls.length === 0) throw 'A URL is required';
    const products = await tierListService.addProductsToTierList(
      req.body.urls,
      req.params.id
    );
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};

export const deleteProductFromTierList = async (
  req: Request<{ id: string; productId: string }, any>,
  res: Response
) => {
  try {
    if (req.body.urls.length === 0) throw 'A URL is required';
    const products = await tierListService.deleteProductFromTierList(
      req.params.id,
      req.params.productId
    );
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};
