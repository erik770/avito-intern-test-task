import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../consts/routes';
import { RouteType } from '../types';

interface AppRouterProps {
    ROUTES: RouteType[],
}

const AppRouter: FC<AppRouterProps> = ({ROUTES}) => {
    return (
    <Switch>
        {ROUTES.map(route => <Route key={route.path} path={route.path}><route.component /></Route> )}
    </Switch>
    );
};

export default AppRouter;