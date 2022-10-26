import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { RouteType } from "../types";

interface AppRouterProps {
  ROUTES: RouteType[],
}

export const AppRouter: FC<AppRouterProps> = function AppRouter({ ROUTES }) {
  return (
    <Switch>
      {ROUTES.map((route) => <Route key={route.path} path={route.path}><route.component /></Route>)}
    </Switch>
  );
};
