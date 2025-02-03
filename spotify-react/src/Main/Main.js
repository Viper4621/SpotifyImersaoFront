import React from "react";
import "./Main.css";

import Playlist1 from "../assets/playlist/1.jpeg";
import Playlist2 from "../assets/playlist/2.png";
import Playlist3 from "../assets/playlist/3.jpeg";
import Playlist4 from "../assets/playlist/4.jpeg";
import Playlist5 from "../assets/playlist/5.jpeg";
import Playlist6 from "../assets/playlist/6.jpeg";
import Playlist7 from "../assets/playlist/7.jpeg";
import Playlist8 from "../assets/playlist/8.jpeg";
import Playlist9 from "../assets/playlist/9.jpeg";
import Playlist10 from "../assets/playlist/10.jpeg";
import Playlist11 from "../assets/playlist/11.jpeg";
import Playlist12 from "../assets/playlist/12.jpeg";
import Playlist13 from "../assets/playlist/13.jpeg";
import Playlist14 from "../assets/playlist/14.jpeg";
import Playlist15 from "../assets/playlist/15.jpeg";

const main = () => {
  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">Boas vindas ao Spotify</h1>
          <h2 className="greeting-subtitle">
            Navegar por todas as nossas seções
          </h2>
        </div>

        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              <a href="" className="cards">
                <div className="cards card1">
                  <img src={Playlist1} alt="card de boas festas" />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card2">
                  <img src={Playlist2} alt="card feitos para você" />
                  <span>Feitos para você</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card3">
                  <img src={Playlist3} alt="Card Lançamentos" />
                  <span>Lançamentos</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card4">
                  <img src={Playlist4} alt="Card Creators" />
                  <span>Creators</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card5">
                  <img src={Playlist5} alt="Card Para treinar" />
                  <span>Para treinar</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card6">
                  <img src={Playlist6} alt="Card Podcasts" />
                  <span>Podcasts</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card7">
                  <img src={Playlist7} alt="Card Sertanejo" />
                  <span>Sertanejo</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card8">
                  <img src={Playlist8} alt="Card Samba e Pagode" />
                  <span>Samba e pagode</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card9">
                  <img src={Playlist9} alt="Card Funk" />
                  <span>Funk</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card10">
                  <img src={Playlist10} alt="Card MPB" />
                  <span>MPB</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card11">
                  <img src={Playlist11} alt="Card Rock" />
                  <span>Rock</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card12">
                  <img src={Playlist12} alt="Card Hip Hop" />
                  <span>Hip Hop</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card13">
                  <img src={Playlist13} alt="Card Indie" />
                  <span>Indie</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card14">
                  <img src={Playlist14} alt="Card Relax" />
                  <span>Relax</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card15">
                  <img src={Playlist15} alt="Card Música Latina" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>

      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card" id="">
            <div className="card-img">
              <img
                id="artist-img"
                className="artist-img"
                alt="Imagem do artista pesquisado"
              />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title="Foo Fighters" className="vst" href=""></a>
              <span className="artist-name" id="artist-name"></span>
              <span className="artist-categorie">Artista</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
