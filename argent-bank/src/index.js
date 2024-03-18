import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Router from "./router";

import { Provider } from "react-redux";
import { store } from "../src/utils/store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
