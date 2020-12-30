import { renderToString } from "react-dom/server";
import React from "react";
import { matchPath, StaticRouter } from "react-router-dom";

import routes from "./routes";
import renderFullPage from "./renderFullPage";
import App from "../components/App";

const router = (req, res) => {
  const match = routes.reduce(
    (acc = null, route) =>
      matchPath(req.url, { path: route, exact: true }) || acc
  );
  /* Si no matchea con ningun route desde el sv */
  if (!match) {
    res.redirect("/products");
  }

  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.status(200).send(renderFullPage(html));
};
export default router;
