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
        
      }}
    >
      <div className="container">
        <div className="header">
          <h1 className="header header-title">All About Musics</h1>
          <p className="header header-description">
           Create millions of songs and podcasts on your device to accompany your day!
          </p>
          <ButtonAuth />
        </div>
      </div>
      <Covers />
    </div>
  );
};

export default NoAuthView;