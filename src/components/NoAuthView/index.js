import React from 'react';
import ButtonAuth from '../ButtonAuth';

const NoAuthView = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>If you want to search tracks, you can get auth here!</h1>
      <ButtonAuth />
    </div>
  );
};

export default NoAuthView;