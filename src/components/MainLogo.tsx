import { PictureFile } from "@/app/lib/types";
import "./MainLogo.scss";
import Image, { StaticImageData } from "next/image";

const MainLogo = ({src}: {src?: StaticImageData | string}) => {
    return (
        <div className='w-full h-full relative'>
            {
                src ? 

                    <Image src={src}
                        alt="logo"
                        fill
                        objectFit="contain"
                    />
                :
                    <div className="main-logo" />
            }
            
        </div>
    )
}

export default MainLogo;