import { StartsWith } from "@/app/lib/types";
import { NumericString } from "@/app/lib/types/math";

const Video = ({
    src,
    width = "480",
    height = "270",
    title,
    portrait
}:{
    src: StartsWith<"https://"> | StartsWith<"http://">,
    width? : NumericString,
    height?: NumericString,
    title: string,
    portrait?: boolean
}) => {
    return (
        // <div className={`w-full h-full relative overflow-hidden ${portrait? "pb-16/9" : "pb-9/16"}`} >
        //     <iframe className="absoute inset-0 w-full h-full"
        <div>
            <iframe className={`w-full ${portrait? "aspect-portrait" : "aspect-video"}`}
                src={src}
                // width={width}
                // height={height}
                title={title}

            />
        </div>

    )
}

export default Video;