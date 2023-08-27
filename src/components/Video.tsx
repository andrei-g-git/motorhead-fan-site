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
        <div>
            <iframe className={`w-full ${portrait? "aspect-portrait" : "aspect-video"}`}
                src={src}
                title={title}
            />
        </div>

    )
}

export default Video;