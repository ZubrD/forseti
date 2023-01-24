import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import { createStore } from "./store/createStore";
import { BrowserRouter } from "react-router-dom";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
