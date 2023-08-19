//"use client"

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
