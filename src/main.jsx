import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesPages from "./Routes";
import Reset from "./style/reset.js";
import GlobalStyle from "./style/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <BrowserRouter>
      <RoutesPages />
    </BrowserRouter>
  </React.StrictMode>
);
