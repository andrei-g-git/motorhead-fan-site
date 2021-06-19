import React from 'react';
import Headline from '../components/Headline';
import PlayingCardDivider from '../components/PlayingCardDivider';
import { news } from '../data/News';
import { tours } from '../data/Tours';
import { interviews } from '../data/Interviews';
import headerImage from '../assets/images/home-header-small.png';
import listBg1 from '../assets/images/textBg1.jpg';
import listBg2 from '../assets/images/textBg2.jpg';
import spadeSmall from '../assets/images/spades2-small.png';
import heartSmall from '../assets/images/heart1-small.png';
import clubSmall from '../assets/images/clubs2-small.png';
//import diamondSmall from '../assets/images/diamonds1-small.png';
import '../scss/Home.scss';

function Home() {

    const spadesCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];

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

                <PlayingCardDivider countArray={spadesCount}
                    src={spadeSmall}
                    dividerClass="playing-card-divider-bottom"
                />
            </div>

            <div className="text-over-bg"> 

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
                        index={0}
                    />
                    <Headline title={news[1].title} 
                        snippet={news[1].snippet}
                        index={1}
                    />
                    <Headline title={news[2].title} 
                        snippet={news[2].snippet}
                        index={2}
                    />
{/*                     <Headline title={news[3].title} //overflows into the image above if more than 3, now that I added dividers
                        snippet={news[3].snippet}
                        index={3}
                    />  */}                                                           
                </div>

                <PlayingCardDivider countArray={spadesCount}
                    src={heartSmall}
                    dividerClass="playing-card-divider-bottom"
                />
            </div>

            <div className="parallax-background-home-1" />

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

            <div className="parallax-background-home-2" />

            <div className="text-over-bg"> 

                <PlayingCardDivider countArray={spadesCount}
                    src={clubSmall}
                    dividerClass=" playing-card-divider-top"
                />

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
                        index={0}
                    />
                    <Headline title={interviews[1].title} 
                        snippet={interviews[1].snippet}
                        index={1}
                    />
                    <Headline title={interviews[2].title} 
                        snippet={interviews[2].snippet}
                        index={2}
                    />                                                          
                </div>
            </div>
   

        </div>
    )
}

export default Home;
