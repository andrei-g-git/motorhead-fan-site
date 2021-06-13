import React from 'react';
import AlbumArticle from '../components/AlbumArticle';
import aceOfSpades from '../assets/images/album_aceofspades.jpg';
import orgasmatron from '../assets/images/album_orgasmatron.jpg';
import album1916 from '../assets/images/1916.jpg';
import theBest from '../assets/images/the_best_of_motorhead.jpg';
import * as textContent from '../data/AlbumText';
import sacrifice from '../assets/images/album_sacrifice.jpg';
import '../scss/Albums.scss';

function Albums() {
    return (
        <div className="albums-container">

            <p className="introduction-albums">
                {
                    textContent.INTRO
                }
            </p>

            <AlbumArticle article={textContent.SACRIFICE} //should probably map?
                cover={album1916}
                playlistUrl="https://embed.music.apple.com/us/album/1916/192751993"
                title="1. 1916"
            />  

            <AlbumArticle article={textContent.ACE_OF_SPADES}
                cover={aceOfSpades}
                playlistUrl="https://embed.music.apple.com/us/album/ace-of-spades/1141561107"
                title="2. Ace of Spades"
            />

            <AlbumArticle article={textContent.ORGASMATRON}
                cover={orgasmatron}
                playlistUrl="https://embed.music.apple.com/us/album/orgasmatron-expanded-bonus-track-edition/1143706159"
                title="3. Orgasmatron"
            />

            <AlbumArticle article={textContent.SACRIFICE}
                cover={sacrifice}
                playlistUrl="https://embed.music.apple.com/us/album/sacrifice/1446663543"
                title="4. Sacrifice"
            />
            <AlbumArticle article={textContent.SACRIFICE}
                cover={theBest}
                playlistUrl="https://embed.music.apple.com/us/album/the-best-of-mot%C3%B6rhead/1143689217"
                title="5. The Best of Motorhead"
            />            
        </div>
    )
}

export default Albums;