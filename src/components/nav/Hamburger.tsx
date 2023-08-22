import React, { ReactNode } from 'react'
import Image from 'next/image';
import "./Hamburger.css";

const Hamburger = ({children}: {children: ReactNode}) => {
    return (
        <div className="hamburger-container sm:hidden">
            <input id="navbar-toggle-faux-checkbox"
                type='checkbox'
            />
            <label htmlFor="navbar-toggle-faux-checkbox">
                <Image src="/images/hamburger-stylized.png"
                    alt="hamburger"
                    width={32}
                    height={32}
                />                
            </label>
            <div className="hacky-navbar bg-lime-400 flex flex-col w-full">
                <div className="flex flex-col align-center gap-20 py-20">
                    {
                        children
                    }                          
                </div>
         
            </div>
        </div>
    )
}

export default Hamburger;