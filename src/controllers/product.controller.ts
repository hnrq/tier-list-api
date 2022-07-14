import { Context } from "hono";
import type Product from "shared/types/product";

import { product } from "__mocks__/product";

export const getProduct = async (context: Context<"url">) => {
  const url = context.req.param("url");

  if (url === undefined) return context.text("Missing product url", 400);

  return context.json(product);
};
