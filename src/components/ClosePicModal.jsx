import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import deleteIcon from '../assets/images/x-mark-white1.png';
import '../scss/ClosePicModal.scss';

function ClosePicModal(props) {
    return (
        <img className="close-pic-modal"
            src={deleteIcon}
            alt={"close"}
            onClick={() => props.toggleModal(false)}
        />
    )
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggleModal: (show) => {
            dispatch(actions.picSwiperToggled(show))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosePicModal);
