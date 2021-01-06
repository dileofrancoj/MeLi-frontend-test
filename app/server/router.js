import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";

import renderFullPage from "./renderFullPage";
import App from "../components/App";

const router = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.status(200).send(renderFullPage(html));
};
export default router;
