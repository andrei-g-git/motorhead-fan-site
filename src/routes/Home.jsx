import React from 'react';
import SpotifyPlaylist from '../components/SpotifyPlaylist';
import aceOfSpades from '../assets/images/album_aceofspades.jpg';
import orgasmatron from '../assets/images/album_orgasmatron.jpg';
import sacrifice from '../assets/images/album_sacrifice.jpg';
import '../scss/Home.scss';

function Home() {
    return (
        <div>

            <div className="album-everything">
                <div className="cover-with-playlist">
                    <img className="album-cover" //i suppose the album everything ...thing should be a component, too
                        src={aceOfSpades}
                        alt="album-cover"
                    />

                    <SpotifyPlaylist 
                        playlistUrl="https://open.spotify.com/embed/album/3rxF05Aux0QTrN533Kjc91?theme=0"
                        title="ace-of-spades"
                    />
                </div>
            </div>

            <div className="album-everything">
                <div className="cover-with-playlist">   
                    <img className="album-cover"
                        src={orgasmatron}
                        alt="album-cover"
                    />

                    <SpotifyPlaylist 
                        playlistUrl="https://open.spotify.com/embed/album/5QgYWE7hIuwFOFS20rE10o?theme=0"
                        title="orgasmatron"
                    />
                </div>
            </div>

            <div className="album-everything">
                <div className="cover-with-playlist">
                    <img className="album-cover"
                        src={sacrifice}
                        alt="album-cover"
                    />

                    <SpotifyPlaylist 
                        playlistUrl="https://open.spotify.com/embed/album/08ovGnoHDTOP6NqbtaFqW7?theme=0"
                        title="sacrifice"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;


