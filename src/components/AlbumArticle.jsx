import React from 'react';
import SpotifyPlaylist from './SpotifyPlaylist';
import '../scss/AlbumArticle.scss';

function AlbumArticle(props) {
    return (
        <div className="album-everything">
            <p className="album-paragraph">
                {
                    props.article
                }
            </p>
            <div className="cover-with-playlist">
                <img className="album-cover" 
                    src={props.cover}
                    alt="album-cover"
                />

                <iframe className="spotify-playlist"
                    src={props.playlistUrl} 
                    width="30%" 
                    height="no, not here, in the css" 
                    frameBorder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    title={props.title}
                />

            </div>
        </div>
    )
}

export default AlbumArticle;
