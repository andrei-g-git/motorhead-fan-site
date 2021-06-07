import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import Home from '../routes/Home';
import { Switch, Route } from 'react-router-dom';
import '../scss/Main.scss';

class Main extends React.Component {
    constructor(){
        super();

        this.state = {
            prevScrollY: 0, //should use a ref or something, re-rendering the whole thing every scrolled pixel is inefficient
            goingUp: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    render(){
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

    handleScroll = () => {
        this.currentScrollY = window.scrollY;
        if(this.currentScrollY > this.state.prevScrollY){
            this.setState({
                goingUp: true
            });
        }
        if(this.currentScrollY < this.state.prevScrollY){
            this.setState({
                goingUp: false
            });
        }          
        this.setState({
            prevScrollY: this.currentScrollY
        })
        console.log(this.state.goingUp); //this isn't in real time, setState is async       
    }
}

export default Main;

