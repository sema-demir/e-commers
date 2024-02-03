import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { BasketProvider } from "./Context/basketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
    </ProductProvider>
  </React.StrictMode>
);
