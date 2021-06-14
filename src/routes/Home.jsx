import React from 'react';
import Headline from '../components/Headline';
import { news } from '../data/News';
import { tours } from '../data/Tours';
import { interviews } from '../data/Interviews';
import headerImage from '../assets/images/home-header-small.png';
import listBg1 from '../assets/images/textBg1.jpg';
import listBg2 from '../assets/images/textBg2.jpg';
import '../scss/Home.scss';

function Home() {
    return (
        <div className="home-container">
            <div className="text-over-bg">
                <img className="home-header-image" 
                    src={headerImage}
                    alt="header_image"
                />
                <div className="home-header-text">
                    If you think you're too old for rock'n'roll, then you are!    
                </div>             
            </div>

{/*             <div className="below-header-container"> */}
                <div className="text-over-bg"> {/* these should definitely be components */}

                    <img className="secondary-backgrounds-home"
                        src={listBg1}
                        alt="text-bg"
                    />

                    <div className="home-news"> 
                        <label className="section-label-left">
                            News
                        </label>
                        <Headline title={news[0].title} 
                            snippet={news[0].snippet}
                        />
                        <Headline title={news[1].title} 
                            snippet={news[1].snippet}
                        />
                        <Headline title={news[2].title} 
                            snippet={news[2].snippet}
                        />
                        <Headline title={news[3].title} 
                            snippet={news[3].snippet}
                        />                                                            
                    </div>
                </div>
                <div className="tours-home container">
                    <div className="row">
                        <iframe className="concert-video-home col-md-6" 
                            src="https://www.youtube.com/embed/H7-ayoJKZ_Q"
                            width="480"
                            height="270"
                            title="change-this"
                        />
                        <div className="tours-list col-md-6">
                            <h4>Last tours:</h4>
                            <h5>{ tours[0] }</h5>
                            <h5>{ tours[1] }</h5>
                            <h5>{ tours[2] }</h5>
                            <h5>{ tours[3] }</h5>
                            <h5>{ tours[4] }</h5>
                            <h5>{ tours[5] }</h5>
                            <h5>{ tours[6] }</h5>
                        </div>
                    </div>
                </div>

                <div className="text-over-bg"> {/* these should definitely be components */}
                    <img className="secondary-backgrounds-home"
                        src={listBg2}
                        alt="text-bg"
                    />
                    <div className="home-news"> 
                    
                    <label className="section-label-left">
                        Interviews
                    </label>                    
                        <Headline title={interviews[0].title} 
                            snippet={interviews[0].snippet}
                        />
                        <Headline title={interviews[1].title} 
                            snippet={interviews[1].snippet}
                        />
                        <Headline title={interviews[2].title} 
                            snippet={interviews[2].snippet}
                        />                                                          
                    </div>
                </div>
{/*             </div> */}      

        </div>
    )
}

export default Home;
