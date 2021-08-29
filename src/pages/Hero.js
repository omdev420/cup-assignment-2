/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Details from '../components/show/Details';
import ShowMainData from '../components/show/ShowMainData';
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

  if (isLoading) {
    return (
      <CenterLoading>
        <PacmanLoader
          loading={isLoading}
          color="#ffa900"
          size={50}
        />
      </CenterLoading>
    );
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <ShowMainData
      image={hero.image}
      name={hero.name}
      fullName={hero.biography['full-name']}
      powerStats={hero.powerstats}
      publisher={hero.biography.publisher}
    >
      <Details
        placeOfBirth={hero.biography['place-of-birth']}
        firstApperance={hero.biography['first-appearance']}
        gender={hero.appearance.gender}
        race={hero.appearance.race}
        height={hero.appearance.height[0]}
        weight={hero.appearance.weight[0]}
        eyeColor={hero.appearance['eye-color']}
        hairColor={hero.appearance['hair-color']}
      />
    </ShowMainData>
  );
};

export default Hero;

const CenterLoading = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
`;
