import React, { ReactNode } from 'react'
import Image from 'next/image';
import "./HamburgerAndMobileNav.scss";
import HalfJaw from './HalfJaw';
import { EndsWith } from '@/app/lib/types';

const Hamburger = ({children, navOffset}: {children: ReactNode, navOffset: EndsWith<"%">}) => {
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
            <div className={`hacky-navbar bg-black w-full ml-[1%] mr-[2%] -mt-[${navOffset}]`}>
                <div className="flex flex-col align-center gap-20 py-20 mt-20">
                    {
                        children
                    }                          
                </div>
               
            </div>

            <div className='flex justify-between w-full -z-10 relative'>
                <HalfJaw position='bottom-left' />
                <HalfJaw position='bottom-right' />
            </div>  
        </div>
    )
}

export default Hamburger;