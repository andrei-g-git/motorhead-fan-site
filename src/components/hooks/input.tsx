"use-client"
import {useScroll, useTransform} from "framer-motion";
import { EndsWith } from "@/app/lib/types";


export const useVerticalParallax = (ref: any, ...scrollFactors: EndsWith<"%">[]) => {
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]        
    });

    return scrollFactors.map((factor: EndsWith<"%">) => {
        return useTransform(
            scrollYProgress,
            [0, 1],
            ["0%", `${factor}%`]
        )
    });
}

