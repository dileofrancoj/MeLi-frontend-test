import path from "path";
import express from "express";

import router from "./router";

class App {
  constructor() {
    this.app = express();
    this.assets = express.static(path.join(__dirname, "../"));
    this.app.use(this.assets);
    this.app.get("*", router);
  }

  app() {
    return this.app;
  }
}

export default App;
