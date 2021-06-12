import React from 'react';
import PicCard from '../components/PicCard';
import * as media from '../data/MediaPicCards';
import 'bootstrap/dist/css/bootstrap.min.css';

function Media() {
    return ( //this is crap, pics don't break naturally, I should just try my own grid and media query
        <div className="container">
            {
                media.picCards.map((picRow) => 
                    <div className="row">
                        {
                            picRow.map((pic) => 
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                    <PicCard image={pic.src}
                                        //caption={pic.caption}
                                    />
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Media;
