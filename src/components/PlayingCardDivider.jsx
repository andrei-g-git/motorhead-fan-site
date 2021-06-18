import React from 'react';

function PlayingCardDivider(props) {
    return (
        <div className={props.dividerClass} >
            {
                props.countArray.map((item, index) => 
                    <img className="playing-card"
                        src={props.src}
                        alt="playing card"
                        key={index}
                    />                        
                )
            }            
        </div>
    )
}

export default PlayingCardDivider;
