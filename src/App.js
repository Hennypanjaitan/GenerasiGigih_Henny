import logo from "./logo.svg";
import "./App.css";

import { Artists } from "./components/AlbumDetails/artist";
import { AllAlbum } from "./components/AllAlbum";

function App() {
  return (
    <div className="mainPage">
      <center>
        <h1 className="judul">Playlist MUsic </h1>
      </center>
      <div
        className="group"
        style={{
          border: "green",
          padding: "10px",
          margin: "auto",
          width: "50%",
          border: "3px solid green",
          display: "block",
          textAlign: "center",
        }}
      >
        <AllAlbum />
      </div>
    </div>
  );
}

export default App;