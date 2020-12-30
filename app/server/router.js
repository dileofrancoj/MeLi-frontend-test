import { renderToString } from "react-dom/server";
import React from "react";
import { matchPath, StaticRouter } from "react-router-dom";

import routes from "./routes";
import renderFullPage from "./renderFullPage";
import App from "../components/App";

export default function router(req, res) {
  const match = routes.reduce(
    (acc, route) => matchPath(req.url, { path: route, exact: true }) || acc,
    null
  );

  if (!match) {
    res.redirect("/products");
  }

  const context = {};

  const html = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );

  res.status(200).send(renderFullPage(html));
}
