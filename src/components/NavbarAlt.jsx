import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/images/logo2.png';
import '../scss/Navbar.scss'; 

function Navbar() {

    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll(prevScrollY, setGoingUp, goingUp));
        return () => {
            //guess this is where I remove the listener?
        }
    }, [])

    return (
        <div className="nav-bar">
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
    )
}

const handleScroll = (prevScrollY, setGoingUp, goingUp) => {
    const currentScrollY = window.scrollY;
    console.log(goingUp + "    " + prevScrollY.current + "    " + currentScrollY);
    if(currentScrollY > prevScrollY.current){
        setGoingUp(false); //calling like this doesn't work
    }
    if(currentScrollY < prevScrollY.current){
        setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp + "    " + prevScrollY.current + "    " + currentScrollY);
}

export default Navbar;
