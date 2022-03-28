import React from "react";
import data from "../Data/data";
import { Button } from "../Button/button";
import { Images } from "../AlbumDetails/images";
import { Title } from "../AlbumDetails/title";
import {Artists} from "../AlbumDetails/artist";

const Playlist = ({ image, title, artist, url }) => {
  return (
    <div>
      <Images image={image} />
      <Title title={title} />
      <Artists artist={artist} />
      <Button url={url} />
    </div>
  );
};

export default Playlist;