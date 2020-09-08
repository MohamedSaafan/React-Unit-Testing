import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Root from "./Root";
import App from "./components/App";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
