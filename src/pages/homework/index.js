import React, { useEffect } from 'react';
import NoAuthView from '../../components/NoAuthView';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setToken } from '../../store/authSlice';

export const Playlist = () => {
  const token = useSelector((state) => state.token?.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    let access_token = window.localStorage.getItem('token');

    if (!token && hash) {
      access_token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.localStorage.setItem('token', access_token);
      window.location.hash = '';
      dispatch(setToken(access_token));
    }
  }, [dispatch]);

  return (
    <div>{token ? <Redirect to="create-playlist" /> : <NoAuthView />}</div>
  );
};