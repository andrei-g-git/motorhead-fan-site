"use client"

import React, { RefObject, useState } from 'react'
import { ParallaxProvider } from "react-scroll-parallax"
import TestLanding from "./TestLanding"
import { useScroll, useTransform } from 'framer-motion'
const TestLandingWrapper = () => {
    const [viewRef, setViewRef] = useState<RefObject<HTMLElement>>()
    const { scrollYProgress } = useScroll({
        target: viewRef,
        offset: ["start start", "end start"]
    })

    const bg1 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const bg2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <>
            <TestLanding sendRef={getViewRef(setViewRef)} />
        </>
    )
}

const getViewRef = (setViewRef: Function) =>
    (ref: any/* MutableRefObject<any> | null */) => {
        setViewRef(ref)
    }

export default TestLandingWrapper