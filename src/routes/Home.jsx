import React from 'react';
import SpotifyPlaylist from '../components/SpotifyPlaylist';
import AlbumArticle from '../components/AlbumArticle';
import aceOfSpades from '../assets/images/album_aceofspades.jpg';
import orgasmatron from '../assets/images/album_orgasmatron.jpg';
import * as albumDescriptions from '../text/HomeText';
import sacrifice from '../assets/images/album_sacrifice.jpg';
import '../scss/Home.scss';

function Home() {
    return (
        <div className="home-container">
            <AlbumArticle article={albumDescriptions.ACE_OF_SPADES}
                cover={aceOfSpades}
                playlistUrl="https://open.spotify.com/embed/album/3rxF05Aux0QTrN533Kjc91?theme=0"
                title="ace-of-spades"
            />

            <AlbumArticle article={albumDescriptions.ORGASMATRON}
                cover={orgasmatron}
                playlistUrl="https://open.spotify.com/embed/album/5QgYWE7hIuwFOFS20rE10o?theme=0"
                title="orgasmatron"
            />

            <AlbumArticle article={albumDescriptions.SACRIFICE}
                cover={sacrifice}
                playlistUrl="https://open.spotify.com/embed/album/08ovGnoHDTOP6NqbtaFqW7?theme=0"
                title="sacrifice"
            />
        </div>
    )
}

export default Home;

