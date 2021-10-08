import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import routes from './routes';

export function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Router>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            path={route.path}
                            key={index}
                            exact={route.exact}
                        >
                            {route.component}
                        </Route>
                    ))}
                </Switch>
            </Router>
        </Fragment>
    );
}
