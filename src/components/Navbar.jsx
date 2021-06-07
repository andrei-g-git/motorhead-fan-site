import React from 'react';
import logo from '../assets/images/logo2.png';
import '../scss/Navbar.scss'; 

function Navbar() {
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

            <a href="/">
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

export default Navbar;
