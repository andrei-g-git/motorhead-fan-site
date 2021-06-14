import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import logo from '../assets/images/logo2.png';
import border from '../assets/images/fangs.png';//'../assets/images/divider8medium-white.png';
import hamburger from '../assets/images/hamburger-stylized.png';
import '../scss/Navbar.scss'; 

class Navbar extends Component {
    constructor(){
        super();

        this.state = {
            prevScrollY: 0, //should use a ref or something, re-rendering the whole thing every scrolled pixel is inefficient
            goingUp: false
        }

        //this.fangCount = new Array(8); 
        this.fangCount = [1, 2, 3, 4, 5, 6, 7, 8];
    }

    render() {

        this.state.goingUp ?
            this.secondClass = "going-up"
        :
            this.secondClass = "going-down"

        this.props.menuVisible ? 
            this.menuVisibilityClass = " menu-visible" //mind the space
        :
            this.menuVisibilityClass = ""

        return (
            <div className={"nav-bar " + this.secondClass}>

                <img className="hamburger-menu" //obv should be a component - or maybe not, I just need an onclick and the implementation is related to nav elements...
                    src={hamburger}
                    alt="hamburger"
                    onClick={() => this.props.handleMenuClick(!this.props.menuVisible)}
                />

                <div className={"nav-items" + this.menuVisibilityClass}>
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
                        href="/media"
                    >
                        Media
                    </a>

                    <a className="nav-item"
                        href="/contact"
                    >
                        Contact
                    </a>
                </div>

                <div className="nav-border-wrapper">
                    <div className="nav-half-border">
                        {/* <img className="ornate-border"
                            src={border}
                            alt="border"
                        />
                        <img className="ornate-border"
                            src={border}
                            alt="border"
                        /> */}
                        {
                            this.fangCount.map((each, index) => 
                                <img className={"ornate-border left-" + index}
                                    src={border}
                                    alt="border"
                                    key={index}
                                />
                            )
                        }
                    </div>

                    <div className="nav-half-border">
                        {/* <img className="ornate-border"
                            src={border}
                            alt="border"
                        />
                        <img className="ornate-border"
                            src={border}
                            alt="border"
                        /> */}
                        {
                            this.fangCount.map((each, index) => 
                                <img className={"ornate-border right-" + index}
                                    src={border}
                                    alt="border"
                                    key={index}
                                />
                            )
                        }                        
                    </div>
                </div>                                                              
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

const mapStateToProps = (state) => {
    return{
        menuVisible: state.uiReducer.navMenuVisible
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleMenuClick: (visible) => {
            dispatch(actions.hamburgerClicked(visible));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
