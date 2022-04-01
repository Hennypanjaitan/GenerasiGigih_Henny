import React from 'react';
import { ButtonSelect } from './ButtonSelect';
import { Artist } from './Artist';
import { Image } from './Image';
import { Title } from './Title';

const AllAlbum = ({ image, title, artist, url, onClick, isSelected, id }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E6D5B8',
        borderRadius: '1rem',
      }}
    >
      <Image image={image} />
      <div style={{ color: '#1B1A17' }}>
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