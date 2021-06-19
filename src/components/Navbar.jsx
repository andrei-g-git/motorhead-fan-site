import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import logo from '../assets/images/logo2.png';
import fangs from '../assets/images/fangs.png';
import fangsLower from '../assets/images/fangsLower.png';
import hamburger from '../assets/images/hamburger-stylized.png';
import '../scss/Navbar.scss'; 

//have flex-visible and block-visible classes
class Navbar extends Component {
    constructor(){
        super();

        this.state = {
            prevScrollY: 0, //should use a ref or something, re-rendering the whole thing every scrolled pixel is inefficient
            goingUp: true
        }
        this.fangCount = [1, 2, 3, 4, 5, 6, 7, 8];
        this.bottomFangCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  
    render() {

        this.state.goingUp ? 
            this.secondClass = "going-up"
        :
            this.secondClass = "going-down"

        this.props.menuVisible ? 
            this.animationDirectionClass = " menu-down"
        :
            this.animationDirectionClass = " menu-up"

        return (
            <div className={"nav-bar " + this.secondClass}>

                <img className="hamburger-menu" 
                    src={hamburger}
                    alt="hamburger"
                    onClick={() => {
                        this.props.handleMenuClick(!this.props.menuVisible);
                    }}
                />

                <a href="/"> 
                    <img className="nav-logo" // #######     LOGO      #########
                        src={logo}
                        alt="logo"
                    />
                </a>
                
                <div className={"nav-items menu-visible" + this.animationDirectionClass}>

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

                    {/* BOTTOM FANGS FOR RETRACTABLE MENU */}
                    <div className="lower-fang-border-wrapper" > 
                        <div className="nav-half-border"> {/* make component */}
                            {
                                this.bottomFangCount.map((each, index) => 
                                    <img className="ornate-border"
                                        src={fangsLower}
                                        alt="border"
                                        key={index}
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div className="nav-border-wrapper">
                    <div className="nav-half-border"> {/* make component */}
                        {
                            this.fangCount.map((each, index) => 
                                <img className={"ornate-border left-" + index}
                                    src={fangs}
                                    alt="border"
                                    key={index}
                                />
                            )
                        }
                    </div>

                    <div className="nav-half-border">
                        {
                            this.fangCount.map((each, index) => 
                                <img className={"ornate-border right-" + index}
                                    src={fangs}
                                    alt="border"
                                    key={index}
                                />
                            )
                        }                        
                    </div>
                </div>  

                {/* <div className="obscure-nav-items" /> */} {/* doesn't work */}                                                       
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
        console.log("going up     " + this.state.goingUp); //this isn't in real time, setState is async       
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
