"use client"

import { useScroll } from "@/components";

const LandingController = ({children}: {children: JSX.Element | React.ReactNode}) => {
    const position = useScroll();
    const bottomBgPos = getParallaxScroll(position, 2);
    const upperBgPos = getParallaxScroll(position, 1);
}

const getParallaxScroll = (position: number, multiplier: number) => {
    return position * multiplier;
}

export default LandingController;