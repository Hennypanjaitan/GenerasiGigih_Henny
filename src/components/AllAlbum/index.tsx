import React from 'react';
import { ButtonSelect } from './ButtonSelect';
import { Artist } from './Artist';
import { Image } from './Image';
import { Title } from './Title';

interface RowAlbumProps {
  title: string;
  artist: string;
  url: string;
  image: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  isSelected: boolean;
  id: string;
}

const AllAlbum = ({
  image,
  title,
  artist,
  onClick,
  isSelected,
  id,
  width,
  height,
}: Partial<RowAlbumProps>) => {
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
        <ButtonSelect onClick={onClick} isSelected={isSelected} id={id} />
      </div>
    </div>
  );
};

export default AllAlbum;