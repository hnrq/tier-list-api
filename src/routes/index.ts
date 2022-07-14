import { Hono } from "hono";

import * as productController from "controllers/product.controller";

const routes = new Hono();

routes
  .get("/", (res) => {
    return res.json({ message: "Working!" });
  })
  .get("/product/:url", productController.getProduct);

export default routes;
