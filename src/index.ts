import { Hono } from "hono";

import routes from "routes";

const app = new Hono();
app.route("/api", routes);

export default {
  port: 3000,
  fetch: app.fetch,
};
