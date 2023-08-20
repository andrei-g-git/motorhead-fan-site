import { PictureFile } from "@/app/lib/types";
import styles from "./BandFixedBg.module.css";


const BandFixedBg = ({backgroundimage}: {backgroundimage: PictureFile}) => {
    return (
        <div className={styles.band_fixed_bg}
            style={{backgroundImage: `url(${backgroundimage})`}}
        >

        </div>
    )
}

export default BandFixedBg;