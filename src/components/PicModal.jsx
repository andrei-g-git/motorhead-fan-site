import React from 'react';
import ClosePicModal from './ClosePicModal';
import '../scss/PicModal.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function PicModal(props) {
    return (
        <div> {/*   use react fragment */}
            {
                props.visible ?
                    <div className="pic-modal-background">
                        <div className="card-modal card">
                            <img className="card-img-top"
                                src={props.image}
                                alt="enlarged"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    {
                                        props.caption
                                    }
                                </div>
                            </div>
                        </div>
                        <ClosePicModal />
                    </div>
                :
                    <div></div>
            }

        </div>
    )
}

export default PicModal;
