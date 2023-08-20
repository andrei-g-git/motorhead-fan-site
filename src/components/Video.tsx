import { StartsWith } from "@/app/lib/types";
import { NumericString } from "@/app/lib/types/math";

const Video = ({
    src,
    width = "480",
    height = "270",
    title
}:{
    src: StartsWith<"https://"> | StartsWith<"http://">,
    width? : NumericString,
    height?: NumericString,
    title: string
}) => {
    return (
        <iframe className="concert-video-home col-md-6" 
            src={src}
            width={width}
            height={height}
            title={title}
        />
    )
}

export default Video;