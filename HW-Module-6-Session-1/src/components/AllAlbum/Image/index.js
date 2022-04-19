import React from 'react';

export const Image = ({ image, width, height }) => {
  return (
    <img
      src={image}
      alt=""
      style={{
        marginRight: '1rem',
        borderRadius: '1rem 0 0 1rem',
        width: width || '180px',
        height: height || '180px',
      }}
    />
  );
};