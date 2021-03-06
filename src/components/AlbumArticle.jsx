import React from 'react';
//import SpotifyPlaylist from './SpotifyPlaylist';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/AlbumArticle.scss';

function AlbumArticle(props) {
    return (
        <div className="album-everything container">
            <div className="row justify-content-around"> {/* around instead  of between to center the playlist when 1 per row */}
                <p className="album-title">
                    {
                        props.title
                    }
                </p>
                <p className="album-paragraph col-sm-12">
                    {
                        props.article
                    }
                </p>
                <img className="album-cover col-sm-6" 
                    src={props.cover}
                    alt="album-cover"
                />

                <iframe className="itunes-playlist col-sm-4"
                    allow="encrypted-media *;" 
                    frameBorder="0" 
                    height="override in css" 
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={props.playlistUrl} 
                    title={props.title}
                />
            </div>        
        </div>
    )
}

export default AlbumArticle;

/*                 <iframe className="spotify-playlist"
                    src={props.playlistUrl} 
                    width="30%" 
                    height="no, not here, in the css" 
                    frameBorder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    title={props.title}
                /> */


