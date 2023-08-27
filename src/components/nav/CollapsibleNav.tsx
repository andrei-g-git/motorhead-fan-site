"use client"

import { EndsWith } from '@/app/lib/types'
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

const CollapsibleNav = ({
    height,
    children
}: {
    height: EndsWith<"px">,
    children: ReactNode
}) => {
    const [goingDown, setGoingDown] = useState(false); //needs to be a hook...
    useEffect(() => {
        let prevScrollY = 0;
        document.addEventListener("scroll", () => {
            const {scrollY} = window;
            const isGoingDown = prevScrollY < scrollY ? true : false;
            setGoingDown(isGoingDown)
            prevScrollY = scrollY;
        });
    }, []);    
    
    return (
        
        <div className="transition-all duration-500 z-30 fixed w-full" 
            style={{top: goingDown ? `-${height}` : 0}}
        >
            {
                children
            }
        </div>
    )
}

export default CollapsibleNav