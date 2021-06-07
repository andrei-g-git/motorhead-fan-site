import React, { Component } from 'react';
import logo from '../assets/images/logo2.png';
import border from '../assets/images/divider8medium-white.png';
import '../scss/Navbar.scss'; 

export default class Navbar extends Component {
    constructor(){
        super();

        this.state = {
            prevScrollY: 0, //should use a ref or something, re-rendering the whole thing every scrolled pixel is inefficient
            goingUp: false
        }
    }

    render() {

        this.state.goingUp ?
            this.secondClass = "going-up"
        :
            this.secondClass = "going-down"

        return (
            <div className="navbar-wrapper">
                <div className={"nav-bar " + this.secondClass}>
                    <a className="nav-item"
                        href="/"
                    >
                        Home
                    </a>

                    <a className="nav-item"
                        href="/albums"
                    >
                        Albums
                    </a>

                    <a href="/"> {/* LOGO */}
                        <img className="nav-logo"
                            src={logo}
                            alt="logo"
                        />
                    </a>

                    <a className="nav-item"
                        href="/about"
                    >
                        About
                    </a>

                    <a className="nav-item"
                        href="/contact"
                    >
                        Contact
                    </a>
                </div>

                <img className={"navbar-border " + this.secondClass}
                    src={border} //doesn't render where it's supposed to or translate in and out but need second class to even see it
                    alt="border"
                />
            </div>
        )
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    } 
    
    handleScroll = () => {
        this.currentScrollY = window.scrollY;
        if(this.currentScrollY > this.state.prevScrollY){
            this.setState({
                goingUp: false
            });
        }
        if(this.currentScrollY < this.state.prevScrollY){
            this.setState({
                goingUp: true
            });
        }          
        this.setState({
            prevScrollY: this.currentScrollY
        })
        console.log(this.state.goingUp); //this isn't in real time, setState is async       
    }    
}
