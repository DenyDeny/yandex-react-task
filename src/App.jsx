import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import store from './store';
import { GlobalStyle } from './globalStyle';
import { ContextComponent } from './containers/Context';
import routes from './routes';

export function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
