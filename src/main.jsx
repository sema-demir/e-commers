import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { BasketProvider } from "./Context/basketContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
    </ProductProvider>
    <ToastContainer autoClose= {1000} />
  </React.StrictMode>
);
