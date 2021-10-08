import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import { ContextComponent } from './containers/Context';
import routes from './routes';

export function App() {
    return (
        <ContextComponent>
            <GlobalStyle />
            <Router>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            path={route.path}
                            key={index}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Router>
        </ContextComponent>
    );
}
