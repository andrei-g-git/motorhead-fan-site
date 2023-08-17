import React from 'react'

const LandingView = ({bgY1, bgY2}: {bgY1: number, bgY2: number}) => {
    return (
        <main className="w-full h-screen overflow-hidden relative grid place-items-center">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/images/sky.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    bottom: bgY1
                }}
            >

            </div>
            <div className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/images/landing-page-band-cutout.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    bottom: bgY2
                }}
            >

            </div>
        </main>
    )
}

export default LandingView;