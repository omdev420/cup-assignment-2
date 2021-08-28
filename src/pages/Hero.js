/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return {
        isLoading: false,
        hero: action.hero,
        error: null,
      };
    }
    case 'FETCH_FAILED': {
      return {
        ...prevState,
        isLoading: false,
        error: action.error,
      };
    }

    default:
      return prevState;
  }
};

const initialState = {
  hero: null,
  isLoading: true,
  error: null,
};

const Hero = () => {
  const { id } = useParams();

  const [{ hero, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;

    apiGet(`${id}`)
      .then(result => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({
              type: 'FETCH_SUCCESS',
              hero: result,
            });
          }
        }, 300);
      })
      .catch(err => {
        if (isMounted) {
          dispatch({
            type: 'FETCH_FAILED',
            error: err.message,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('Hero', hero);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return <div>Hero</div>;
};

export default Hero;
