import supabase from '../db';
import type { definitions } from '../types/supabase';

const TABLE_NAME = 'product';

export const productQuery = `
  id,
  title,
  categoryId: category_id,
  store,
  images,
  originalPrice: original_price,
  ratings,
  currency,
  salePrice: sale_price
`;

export const getProduct = async (id: string) => {
  const response = await supabase
    .from<definitions[typeof TABLE_NAME]>(TABLE_NAME)
    .select()
    .eq('id', id)
    .limit(1)
    .single();
  return response.data;
};

export const addProducts = async (
  products: definitions[typeof TABLE_NAME][]
) => {
  const response = await supabase
    .from<definitions[typeof TABLE_NAME]>(TABLE_NAME)
    .insert(products);
  return response.data;
};

export const getProducts = async (filter: string) => {
  const response = await supabase
    .from<definitions[typeof TABLE_NAME]>(TABLE_NAME)
    .select()
    .or(filter);

  return response.data;
};
