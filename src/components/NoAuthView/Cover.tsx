import React from 'react';

export const Covers = () => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        zIndex: '0',
        top: '0',
      }}
    >
      <img
        src="/images/covers.png"
        alt="cover"
        style={{
          
          width: '100%',
          
        }}
      />
    </div>
  );
};