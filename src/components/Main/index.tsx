// Bibliotecas:
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Componentes:
import Login from './Login';
import Feed from './Feed';

// CSS:
import './main.css';

// Config:
import PATHS from '../../config/paths';

function Main() {
    return (
        <section className="main">
            <BrowserRouter>
                <Switch>
                    <Route path={PATHS.ROOT} exact={true} >
                        <Login />
                    </Route>

                    <Route path={PATHS.LOGIN} >
                        <Login />
                    </Route>

                    <Route path={PATHS.FEED}>
                        <Feed />
                    </Route>
                </Switch>
            </BrowserRouter>
        </section>
    );
}

export default Main;