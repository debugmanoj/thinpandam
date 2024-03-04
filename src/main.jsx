import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Store from "./Customer redux/Store.jsx";

import { Provider as CustomerProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomerProvider store={Store}>
      <App />
    </CustomerProvider>
  </React.StrictMode>
);
