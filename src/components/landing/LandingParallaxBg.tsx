"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

import * as Styled from "./styles";

const LandingParallaxBg = ({layer}: {layer: number}) => {
    const ref = useRef(null);
    //const progressions = useVerticalParallax(ref, "50%");
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const bg1 = useTransform(scrollYProgress, [0,1], ["0%", "50%"])

    // console.log(bg1)
    // console.log(progressions)    //same result and yet the first element doesn't work...

    return (
        <Styled.Main ref={ref}>
            <motion.div className={`absolute inset-0 z-${layer * 10}`}
                style={{
                    backgroundImage: `url(/images/sky.png)`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    y: bg1
                }}
            >

            </motion.div>

            <div className={`absolute inset-0 z-${layer * 10}`}
                style={{
                    marginTop: "130px",
                    backgroundImage: `url(/images/landing-page-band-cutout.png)`,
                    backgroundPosition: "top",//"bottom",
                    backgroundSize: "cover",
                }}
            >

            </div>
        </Styled.Main>
    )
}

export default LandingParallaxBg;