"use client"
import {motion, useScroll, useTransform} from "framer-motion";
//import { useVerticalParallax } from "@/components";
import { useRef } from "react";

const LandingParallaxBg = () => {
    const ref = useRef(null);
    //const progressions = useVerticalParallax(ref, "200%", "100%");
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const bg1 = useTransform(scrollYProgress, [0,1], ["0%", "200%"])
    const bg2 = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center"
            ref={ref}
        >
            <motion.div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/images/sky.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: bg1
                    //y: progressions[0]
                }}
            >

            </motion.div>

            <motion.div className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/images/landing-page-band-cutout.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: bg2
                    //y: progressions[1]
                }}
            >

            </motion.div>
        </div>
    )
}

export default LandingParallaxBg;