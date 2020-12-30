import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./src/App";

render(
  <Router>
    <App data={window.__PRELOADED_STATE__} />
  </Router>,
  document.getElementById("root")
);
