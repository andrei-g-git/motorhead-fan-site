import React from 'react';

function SpotifyPlaylist(props) {
    return (
        <iframe //className="spotify-playlist"
        src={props.playlistUrl} 
        width="25%" //{props.width}
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
        title={props.title}
    />
    )
}

export default SpotifyPlaylist;
