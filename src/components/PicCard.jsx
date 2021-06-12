import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import 'bootstrap/dist/css/bootstrap.min.css';

function PicCard(props) {
    return (
        <div className="card"
            onClick={() => {
                props.handleClick(props.index);
                props.toggleModal(true);
            }}
        >
            <img className="card-img-top"
                src={props.image}
                alt="pic"
            />
            <div className="card-body">
                <div className="card-text">
                    {
                        //props.caption //NO, this is for the modal
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleClick: (index) => {
            dispatch(actions.picIndexed(index));
        },
        toggleModal: (show) => {
            dispatch(actions.picSwiperToggled(show));
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicCard);
