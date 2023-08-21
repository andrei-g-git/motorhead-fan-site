import React from 'react'
import Image from 'next/image';
import "./Hamburger.css";

const Hamburger = () => {
    return (
        <div className='hamburger-container'>
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
                <p>blah 1</p>
                
                <p>blah 2</p>

                <p>blah 3</p>                
            </div>
        </div>
    )
}

export default Hamburger;