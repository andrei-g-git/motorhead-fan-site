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
            goingUp: false
        }
        this.fangCount = [1, 2, 3, 4, 5, 6, 7, 8];
        this.bottomFangCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    render() {

        this.state.goingUp ? //I should probably just use a damn IF statement at this point
            this.secondClass = "going-up"
        :
            this.secondClass = "going-down"

        this.props.menuVisible ? 
            this.menuVisibility = " menu-visible" //mind the space
        :
            this.menuVisibility = ""

        this.props.menuVisible ? 
            this.navItemVisibility = "nav-item-visible"// NO SPACE
        :
            this.navItemVisibility= ""

        this.props.menuVisible ? 
            this.invisibilityClass = " "
        :
            this.invisibilityClass = " display-none"

        this.props.menuVisible ? 
            this.animationDirectionClass = " menu-down"
        :
            this.animationDirectionClass = " menu-up"

        return (
            <div className={"nav-bar " + this.secondClass}>

                <img className="hamburger-menu" //obv should be a component - or maybe not, I just need an onclick and the implementation is related to nav elements...
                    src={hamburger}
                    alt="hamburger"
                    onClick={() => {
                        this.props.handleMenuClick(!this.props.menuVisible);
                        //this.switchNavItemOrder(this.props.menuVisible)
                    }}
                />

                <a href="/"> 
                    <img className="nav-logo" // #######     LOGO      #########
                        src={logo}
                        alt="logo"
                    />
                </a>

                <div className={"nav-items" + this.menuVisibility + this.animationDirectionClass}>

                    <a className="nav-item"
                        id={this.navItemVisibility + "_1"} //no spaces, ids can't have multiple, well, ids
                        href="/"
                    >
                        Home
                    </a>

                    <a className="nav-item"
                        id={this.navItemVisibility + "_2"}
                        href="/albums"
                    >
                        Albums
                    </a>
                
                    <a className="nav-item"
                        id={this.navItemVisibility + "_3"}
                        href="/media"
                    >
                        Media
                    </a>

                    <a className="nav-item"
                        id={this.navItemVisibility + "_4"}
                        href="/contact"
                    >
                        Contact
                    </a>

                    {/* BOTTOM FANGS FOR RETRACTABLE MENU */}
                    <div className={"lower-fang-border-wrapper" + this.invisibilityClass}> {/* the imvisibility class may not work with the animated transition, may be instant */}
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
    
    switchNavItemOrder = (menuVisible) => { //is the menuVisible state ASYNC???
        this.actualMenuVisibleBecauseTheStateHasntYetChanged = !menuVisible;
        this.navItems = document.getElementsByClassName("nav-items")[0]; 
        this.logo = document.getElementsByClassName("nav-logo")[0];
        if(this.actualMenuVisibleBecauseTheStateHasntYetChanged){
            this.navItems.insertBefore(this.logo, this.navItems.firstChild);
        } else {
            this.navItems.insertBefore(this.logo, this.navItems.children[3]);
        }
        console.log(this.navItems.firstChild.className)
        console.log(this.navItems.children[1].className + "####")
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
