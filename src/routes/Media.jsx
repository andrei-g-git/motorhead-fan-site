import React from 'react'; 
import PicCard from '../components/PicCard';
import PicModal from '../components/PicModal';
import * as media from '../data/MediaPicCards';
//import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import '../scss/Media.scss';

function Media(props) {
    return (
        <div className="media-container">
            <div className="media-grid">
                {
                    media.picCards.map((pic, index) => 
                        <PicCard image={pic.src}
                            caption={pic.caption}
                            index={index}
                            key={pic.id}
                        />
                    )
                }
            </div>

            <PicModal image={extractImage(props.picIndex)}
                caption={extractCaption(props.picIndex)}
                visible={props.showModal}
            />

            <div className="video-grid">
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/3mbvWn1EY6g"
                    // width="480"
                    // height="270"
                    title="motorhead-video-1"
                />
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/1M4FG1UXH5w"
                    // width="480"
                    // height="270"
                    title="motorhead-video-2"
                />
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/0GI7LrSHYaU"
                    // width="480"
                    // height="270"
                    title="motorhead-video-3"
                />
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/S_CXDdmu_ug"
                    // width="480"
                    // height="270"
                    title="motorhead-video-4"
                />
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/CME5BP5fZg4"
                    // width="480"
                    // height="270"
                    title="motorhead-video-5"
                />
                <iframe className="concert-video-media" 
                    src="https://www.youtube.com/embed/d5F7uhCIBco"
                    // width="480"
                    // height="270"
                    title="motorhead-video-6"
                />  
            </div>

            <div>
                {
                    props.showModal ? 
                        <h1>VISIBLE!</h1>
                    : 
                        <h1>HIDDEN!</h1>
                }
            </div>
        </div>
    )
}

const extractCaption = (index) => {

    console.log(index);

    return media
        .picCards[index]
        .caption;
}

const extractImage = (index) => {
    return media
        .picCards[index]
        .src;
}

const mapStateToProps = (state) => {
    return {
        showModal: state.uiReducer.picSwiperVisible,
        picIndex: state.uiReducer.picIndex
    }
}

export default connect(mapStateToProps)(Media);
