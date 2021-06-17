import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../routes/Home';
import Media from '../routes/Media';
import Albums from '../routes/Albums';
import { Switch, Route } from 'react-router-dom';
import '../scss/Main.scss';

function Main(){
    return (
        <div className="main">
            <div className="main-container">
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/media">
                        <Media />
                    </Route>
                    <Route path="/albums">
                        <Albums />
                    </Route>                    
                </Switch>
                
                <Footer />
            </div>
        </div>
    )   
}

export default Main;

