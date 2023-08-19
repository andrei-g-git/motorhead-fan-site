// import React, { MutableRefObject, useRef } from 'react'

// const LandingView = (parallaxRefs: MutableRefObject<any>[], sendRef: (ref: MutableRefObject<any>) => MutableRefObject<any>) => {

//     const ref = useRef(null);

//     sendRef(ref);

//     return (
//         <main className="w-full h-screen overflow-hidden relative grid place-items-center"
//             ref={ref}
//         >
//             <div className="absolute inset-0 z-0"
//                 style={{
//                     backgroundImage: `url(/images/sky.png)`,
//                     backgroundPosition: "bottom",
//                     backgroundSize: "cover",
//                     //bottom: offsets[0]//bgY1
//                 }}
//             >

//             </div>
//             <div className="absolute inset-0 z-20"
//                 style={{
//                     backgroundImage: `url(/images/landing-page-band-cutout.png)`,
//                     backgroundPosition: "bottom",
//                     backgroundSize: "cover",
//                     //bottom: offsets[1]//bgY2
//                 }}
//             >

//             </div>
//         </main>
//     )
// }

// export default LandingView;