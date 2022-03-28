
import React from "react";
import data from "../Data/data";
import Playlist from "../Playlist/playlist";

const renderHeader = () => {
  return data.map((album) => {
    return (
      <Playlist
        image={album.album.images[0].url}
        title={album.name}
        artist={album.artists[0].name}
        url={album.artists[0].uri}
        key={album.id}
      />
    );
  });
};

export const AllAlbum = () => {
  return <div>{renderHeader()}</div>;
};