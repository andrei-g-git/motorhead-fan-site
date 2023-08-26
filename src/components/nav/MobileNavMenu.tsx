import React, { ReactNode } from 'react'
import "./MobileNavMenu.scss";
import HalfJaw from './HalfJaw';
import { EndsWith } from '@/app/lib/types';


/* I need to understand how this thing actually works so I can take out the hamburger menu out of the mobile nav's staking contenx */
const MobileNavMenu = ({
    children, 
    Hamburger,
    offsetLeft,
    offsetRight,
    offsetTop
}: {children: ReactNode, 
    Hamburger: JSX.Element,
    offsetLeft?: EndsWith<"%"> | EndsWith<"px">,
    offsetRight?: EndsWith<"%"> | EndsWith<"px">,
    offsetTop?: EndsWith<"%"> | EndsWith<"px">
}) => {
    return (
        <div className="hamburger-container sm:hidden">
            <input id="navbar-toggle-faux-checkbox"
                type='checkbox'
            />
            <label htmlFor="navbar-toggle-faux-checkbox">
                <div className='relative z-30'>
                    {
                        Hamburger
                    }
                </div>

            </label>
            <div className={`hacky-navbar relative bg-black w-full`}
                style={{ //meh...
                    marginLeft: offsetLeft? offsetLeft : 0,
                    marginRight: offsetRight? offsetRight : 0,
                    marginTop: offsetTop? offsetTop : 0,
                }}
            > 
                <div className="flex flex-col align-center gap-20 py-20 mt-20">
                    {
                        children
                    }                          
                </div>
               
            </div>

            <div className=' w-full -z-10 relative flex justify-between -top-12'>
                <div className='-z-10 relative'> {/* these z indexes don't work because the stacking indexi are all whack */}
                    <HalfJaw position='bottom-left' />                    
                </div>
                <div className='-z-10 relative'>
                    <HalfJaw position='bottom-right' />                    
                </div>

            </div>  
        </div>
    )
}

export default MobileNavMenu;