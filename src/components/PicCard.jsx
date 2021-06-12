import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PicCard(props) {
    return (
        <div className="card"
        style={{ //test delete
            width: "120px",
            height: "120px",
            //border: "1px solid white"
        }}        
        >
            <img className="card-img-top"
                src={props.image}
                alt="pic"
            />
            <div className="card-body">
                <div className="card-text">
                    {
                        props.caption
                    }
                </div>
            </div>
        </div>
    )
}

export default PicCard;
