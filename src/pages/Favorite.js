/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import FadeIn from 'react-fade-in';

import MainPageLayout from '../components/MainPageLayout';
import { useHeroes } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';

const Favorite = () => {
  const [starred] = useHeroes();

  const [heroes, setHeroes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(id => apiGet(`${id}`));

      Promise.all(promises)
        .then(results => {
          setHeroes(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && (
        <PacmanLoader
          color="#ffa900"
          loading={isLoading}
          size={50}
          css={{
            margin: '100px',
          }}
        />
      )}
      {error && <div>Error occured while loading</div>}
      {!isLoading && !heroes && (
        <div>No shows were starred</div>
      )}
      {!isLoading && !error && heroes && (
        <FadeIn>
          <ShowGrid data={heroes} />
        </FadeIn>
      )}
    </MainPageLayout>
  );
};

export default Favorite;
