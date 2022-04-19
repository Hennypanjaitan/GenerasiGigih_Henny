import React from 'react';
import ButtonAuth from '../ButtonAuth';
import { Covers } from './Cover';
import './style.css';

const NoAuthView = () => {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '90%',
      }}
    >
      <div className="container">
        <div className="header">
          <h1 className="header header-title">Music & Memories</h1>
          <p className="header header-description">
            Create your spotify playlists that are personalized to your mood,
            unique taste and also memories. Select your best tracks and name
            your playlist by yourself.
          </p>
          <ButtonAuth />
        </div>
      </div>
      <Covers />
    </div>
  );
};

export default NoAuthView;