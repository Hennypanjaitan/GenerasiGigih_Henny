import './App.css';
import dataJson from './components/home/data';
import Playlist from './components/home/playlist';


function App() {
  return (
    <div className="App">
      <div>
        <h2>Track Info</h2>
        <Playlist url={dataJson.album.images[0].url}/>
      </div>
      <div>
        <Playlist name={dataJson.name}/>
        <Playlist albumName={dataJson.album.name}/>
        <Playlist artist={dataJson.artists[0].name}/>
        <button><a href={dataJson.album.artists[0].external_urls.spotify}>SELECT</a></button>
      </div>
    </div>
  );
}

export default App;