"use client"
import { useScroll , useTransform, motion} from 'framer-motion'
import React, { useRef } from 'react'

const TestLanding = () => {
    const ref = useRef(null)


    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const bg1 = useTransform(scrollYProgress, [0,1], ["0%", "200%"])
    const bg2 = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    return (

        <main className="w-full h-screen overflow-hidden relative grid place-items-center"
            ref={ref}
        >
            <motion.div className="absolute inset-0 z-0"

                style={{
                    backgroundImage: `url(/images/sky.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: bg1
                }}
            >

            </motion.div>

            <motion.div className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/images/landing-page-band-cutout.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: bg2
                }}
            >

            </motion.div>
        </main>
    )
}

export default TestLanding