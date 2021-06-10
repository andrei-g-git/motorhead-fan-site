import React from 'react';
//import SpotifyPlaylist from '../components/SpotifyPlaylist';
import AlbumArticle from '../components/AlbumArticle';
import aceOfSpades from '../assets/images/album_aceofspades.jpg';
import orgasmatron from '../assets/images/album_orgasmatron.jpg';
import album1916 from '../assets/images/1916.jpg';
import theBest from '../assets/images/the_best_of_motorhead.jpg';
import * as albumDescriptions from '../text/HomeText';
import sacrifice from '../assets/images/album_sacrifice.jpg';
import '../scss/Home.scss';

function Home() {
    return (
        <div className="home-container">
            <AlbumArticle article={albumDescriptions.SACRIFICE}
                cover={album1916}
                playlistUrl="https://embed.music.apple.com/us/album/1916/192751993"
                title="1916"
            />  

            <AlbumArticle article={albumDescriptions.ACE_OF_SPADES}
                cover={aceOfSpades}
                playlistUrl="https://embed.music.apple.com/us/album/ace-of-spades/1141561107"
                title="ace-of-spades"
            />

            <AlbumArticle article={albumDescriptions.ORGASMATRON}
                cover={orgasmatron}
                playlistUrl="https://embed.music.apple.com/us/album/orgasmatron-expanded-bonus-track-edition/1143706159"
                title="orgasmatron"
            />

            <AlbumArticle article={albumDescriptions.SACRIFICE}
                cover={sacrifice}
                playlistUrl="https://embed.music.apple.com/us/album/sacrifice/1446663543"
                title="sacrifice"
            />
            <AlbumArticle article={albumDescriptions.SACRIFICE}
                cover={theBest}
                playlistUrl="https://embed.music.apple.com/us/album/the-best-of-mot%C3%B6rhead/1143689217"
                title="-the-best-of-motorhead"
            />            
        </div>
    )
}

export default Home;
