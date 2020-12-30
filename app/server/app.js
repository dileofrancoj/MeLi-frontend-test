import path from "path";
import express from "express";

import router from "./router";

const app = express();

const assets = express.static(path.join(__dirname, "../"));

app.use(assets);

app.get("*", router);

export default app;
