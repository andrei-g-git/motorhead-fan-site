import { PictureFile } from "@/app/lib/types";
import styles from "./BandFixedBg.module.css";


const BandFixedBg = ({backgroundimage}: {backgroundimage: PictureFile}) => {
    return (
        <div className={styles.band_fixed_bg}
            style={{backgroundImage: `url(${backgroundimage})`}}
            //style={{backgroundImage: "url(https://sensilab.monash.edu/new-sensilab/wp-content/uploads/2017/08/4949794-random-image.jpg)"}}
        >

        </div>
    )
}

export default BandFixedBg;