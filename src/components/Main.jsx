import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../routes/Home';
import Media from '../routes/Media';
import Albums from '../routes/Albums';
import NewsArticle from '../components/NewsArticle';
import { Switch, Route } from 'react-router-dom';
import { formatWithHyphen } from '../js/format';
import { news } from '../data/News';
import '../scss/Main.scss';

function Main(){
    return (
        <div className="main">
            <div className="main-container">
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/media">
                        <Media />
                    </Route>
                    <Route path="/albums">
                        <Albums />
                    </Route>  
                    <Route path="/news/:title"
                        render={routeProps => {
                            const paramTitle = routeProps.match.params.title;         
                            const newsArrayWithOneElement = news   
                                .filter(article => formatWithHyphen(article.title) === paramTitle);
                            const article = newsArrayWithOneElement[0];    
                            
                            return typeof article !== "undefined" ? 
                                <NewsArticle title={article.title}
                                    image={article.image}
                                    content={article.content}
                                />
                            :
                                <div></div>                            
                        }}
                    />                                    
                </Switch>
                
                <Footer />
            </div>
        </div>
    )   
}

export default Main;

