import React from 'react';

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
            <p className="article-content">
                {
                    props.content
                }
            </p>
        </div>
    )
}

export default NewsArticle;
