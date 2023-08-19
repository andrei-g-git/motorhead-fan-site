"use client"
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import "./test.css"

import * as Styled from "./styles";

const LandingParallaxBg = () => {
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
        // <div //className="w-full overflow-hidden relative grid place-items-center"
        //     className="test"
        //     style={{
        //         width: "100%",
        //         overflowX: "hidden",
        //         position: "relative",
        //     }}
        //     ref={ref}
        // >
        <Styled.Main ref={ref}>


            <motion.div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/images/sky.png)`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    y: bg1
                }}
            >

            </motion.div>

            <div className="absolute inset-0 z-20"
                style={{
                    marginTop: "130px",
                    backgroundImage: `url(/images/landing-page-band-cutout.png)`,
                    backgroundPosition: "top",//"bottom",
                    backgroundSize: "cover",
                }}
            >

            </div>
        </Styled.Main>
        //</div>
    )
}

export default LandingParallaxBg;