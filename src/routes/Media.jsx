import React from 'react'; 
import PicCard from '../components/PicCard';
import * as media from '../data/MediaPicCards';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import '../scss/Media.scss';

function Media(props) {
    return (
        <div>
            <div className="media-grid">
                {
                    media.picCards.map((pic, index) => 
                        <PicCard image={pic.src}
                            caption={pic.caption}
                            index={index}
                            clicked={handleImageClick}
                        />
                    )
                }
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

const handleImageClick = (index) => {
    //
}

const mapStateToProps = (state) => {
    return {
        showModal: state.uiReducer.picSwiperVisible
    }
}

export default connect(mapStateToProps)(Media);
