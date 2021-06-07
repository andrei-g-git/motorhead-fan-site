import React from 'react';
import Navbar from './Navbar';
import Home from '../routes/Home';
import { Switch, Route } from 'react-router-dom';
import '../scss/Main.scss';

function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main;

