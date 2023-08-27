"use client" 

import { EndsWith } from "@/app/lib/types";
import { useEffect, useState } from "react"

export const withCollapseOnScroll = ( //Can't be called from server component so it's useless...
    WrappedComponent: React.FunctionComponent<any>,
    height: EndsWith<"px">
) =>
    (props: any) => {
        const [goingDown, setGoingDown] = useState(false);

        useEffect(() => {
            let prevScrollY = 0;
            document.addEventListener("scroll", () => {
                const {scrollY} = window;
                const isGoingDown = prevScrollY < scrollY ? true : false;
                setGoingDown(isGoingDown)
                prevScrollY = scrollY;
            });
        }, []);

        return(
            <div style={{top: goingDown ? `-${height}` : 0}}>
                <WrappedComponent {...props} />
            </div>
        )
    }


// import { useParallax } from ".."

//  export const withSParallax = (WrappedComponent: React.FunctionComponent<any>) => 
//      (props: any) => {
//         const offsets = useParallax(2, 1);
//         return(
//             <>
//                 <WrappedComponent offsets={offsets} {...props} />
//             </>
//         )
//      }


// import { useScroll } from "@/components";

// export const withScrolling = (WrappedComponent: React.FunctionComponent<any>) => 
//     (props: any) => {
//         const position = useScroll();
//         const bottomBgPos = getParallaxScroll(position, 2);
//         const upperBgPos = getParallaxScroll(position, 1);
//         return(
//             <>
//                 <WrappedComponent bgY1={bottomBgPos}
//                     bgY2={upperBgPos}
//                     {...props} 
//                 />
//             </>
//         )
//     }

// const getParallaxScroll = (position: number, multiplier: number) => {
//     return position * multiplier;
// }    
