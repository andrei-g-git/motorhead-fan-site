"use-client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useScroll = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll(setPosition), { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll(setPosition));
        }
    }, [])

    return position;
}

const handleScroll = (setPosition: Dispatch<SetStateAction<number>>) => 
    () => {
        setPosition(window.scrollY);
    }