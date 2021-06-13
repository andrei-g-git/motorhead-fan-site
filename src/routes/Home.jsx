import React from 'react';
import Headline from '../components/Headline';
import { news } from '../data/News';
import '../scss/Home.scss';

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <div className="home-header-image" />   
                <div className="home-header-text">
                    If you think you're too old for rock'n'roll, then you are!    
                </div>             
            </div>
            <div className="below-header-container">
                <label className="news-label">
                    News
                </label>

                <div className="home-news">
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

        </div>
    )
}

export default Home;
