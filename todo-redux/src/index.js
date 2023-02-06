import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyStore from "./ReduxStore/ReduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={MyStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
