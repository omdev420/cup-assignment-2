/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
      {isLoading && <div>Shows are loading</div>}
      {error && <div>Error occured while loading</div>}
      {!isLoading && !heroes && (
        <div>No shows were starred</div>
      )}
      {!isLoading && !error && heroes && (
        <ShowGrid data={heroes} />
      )}
    </MainPageLayout>
  );
};

export default Favorite;
