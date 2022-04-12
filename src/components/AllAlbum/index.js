import React from 'react';
import { ButtonSelect } from './ButtonSelect';
import { Artist } from './Artist';
import { Image } from './Image';
import { Title } from './Title';

const AllAlbum = ({
  image,
  title,
  artist,
  url,
  onClick,
  isSelected,
  id,
  width,
  height,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#252836',
        borderRadius: '.75rem',
      }}
    >
      <Image image={image} width={width} height={height} />
      <div
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          alignItems: 'start',
        }}
      >
        <Title title={title} />
        <Artist artist={artist} />
        <ButtonSelect
          url={url}
          onClick={onClick}
          isSelected={isSelected}
          id={id}
        />
      </div>
    </div>
  );
};

export default AllAlbum;