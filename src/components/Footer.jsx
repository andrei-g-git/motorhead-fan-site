import React from 'react';
import facebook from '../assets/images/facebook_small_white.png';
import twitter from '../assets/images/twitter_small_white.png';
import instagram from '../assets/images/instagram_small_white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Footer.scss';

function Footer() {
    return (
        <div className="footer">{/* "container footer"> */}
{/*             <div className="row"> */}
                <div className="social-media-links">{/*  col-sm-6"> */}
                    <a href="">
                        <img className="social-media-icon" 
                            src={twitter}
                            alt="social-media"
                        />
                    </a>                                     
                    <a href="">
                        <img className="social-media-icon" 
                            src={facebook}
                            alt="social-media"
                        />
                    </a>
                    <a href="">
                        <img className="social-media-icon" 
                            src={instagram}
                            alt="social-media"
                        />
                    </a>                                        
                </div>
                <div className="text-links">
                    <a className="text-link" 
                        href="/contact"
                    >
                        Contact
                    </a>
                    <a className="text-link" 
                        href="/about"
                    >
                        About
                    </a>
                    <a className="text-link" 
                        href="/whatever"
                    >
                        Something
                    </a>                            

                </div>
{/*             </div> */}
        </div>
    )
}

export default Footer;
