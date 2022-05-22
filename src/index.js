import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "@ghu/App";
import store from "./store/store";
import "./styles/index.css";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
