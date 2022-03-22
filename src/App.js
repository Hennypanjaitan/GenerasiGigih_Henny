import './App.css';
import dataJson from './pages/home/index';
import data from './pages/home/index';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Track Info</h2>
        <img src={dataJson.album.images[0].url} width="250" height="200" className="rotate" />
      </div>
      <div>
        <h2>{dataJson.name}</h2>
        <h3>{dataJson.album.name}</h3>
        <p>{dataJson.artists[0].name}</p>
      	<button><a href={dataJson.album.artists[0].external_urls.spotify}>SELECT</a></button>
      </div>
    </div>
  );
}

export default App;