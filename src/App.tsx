import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { AppRouter } from "./components/AppRouter";
import { ROUTES } from "./consts/routes";

export const App = function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter ROUTES={ROUTES} />
      </BrowserRouter>
    </Provider>
  );
};
