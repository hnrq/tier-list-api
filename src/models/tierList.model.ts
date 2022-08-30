import supabase from '../db';
import Product from '../types/Product';
import { definitions } from '../types/supabase';
import TierList from '../types/TierList';

export const getTierList = async (id: string) => {
  const response = await supabase
    .from('tier_list_product')
    .select(
      `
      tier_list (
        title
        description
        rank_order
        rank (
          title
          description
          product_order
        )
        product (*)
      )
    `
    )
    .order('array_position(rank_order, rank.id)')
    .order('array_position(product_order, product.id)', {
      foreignTable: 'rank',
    });

  return response.data;
};

export const addTierList = async (
  tierList: Pick<TierList, 'title' | 'description'>
) => {
  const response = await supabase
    .from<definitions['tier_list']>('tier_list')
    .insert(tierList)
    .limit(1)
    .single();

  return response.data;
};
export const deleteTierList = async (id: string) => {
  const response = await supabase
    .from<definitions['tier_list']>('tier_list')
    .delete()
    .match({ id })
    .limit(1)
    .single();

  return response.data;
};

export const updateTierList = async (
  id: string,
  tierList: Pick<TierList, 'description' | 'title'>
) => {
  const response = await supabase
    .from<definitions['tier_list']>('tier_list')
    .update(tierList)
    .match({ id })
    .limit(1)
    .single();

  return response.data;
};

export const addProductsToTierList = async (
  id: string,
  products: Product[]
) => {
  await supabase
    .from<definitions['tier_list_product']>('tier_list_product')
    .insert(
      products.map(({ id: productId }) => ({
        tier_list_id: id,
        product_id: productId,
      }))
    );

  return products;
};

export const deleteProductFromTierList = async (
  id: string,
  productId: string
) => {
  const response = await supabase
    .from<definitions['tier_list_product']>('tier_list_product')
    .delete()
    .match({ tier_list_id: id, product_id: productId });

  return response.data;
};
