import React from 'react';
import spade from '../assets/images/spades2.png';
import '../scss/NewsArticle.scss'

function NewsArticle(props) {
    return (
        <div className="article">
            <h1 className="article-title">
                {
                    props.title
                }
            </h1>
            <img className="article-image" 
                src={props.image}
                alt="header"
            />
            <pre className="article-content">
                {
                    props.content
                }
            </pre>
            <img className="spade-fin" 
                src={spade}
                alt="spade"
            />
        </div>
    )
}

export default NewsArticle;
