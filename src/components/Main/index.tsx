import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './main.css';
import Login from './Login';
import Feed from './Feed';
import ProfileSidebar from './ProfileSidebar';

function Main() {
    return (
        <section className="main">
            <BrowserRouter>
                <Switch>
                    <Route path="/"exact={true} >
                        <Login />
                    </Route>

                    <Route path="/feed">
                        <Feed />
                        <ProfileSidebar />
                    </Route>
                </Switch>
            </BrowserRouter>

        </section>
    );
}

export default Main;