/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';
import { useHeroes } from '../../misc/custom-hooks';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  const [starredHeroes, dispatchHeroes] = useHeroes();

  return (
    <FlexGrid>
      {data.map(hero => {
        const isStarred = starredHeroes.includes(hero.id);

        const onStarredClicked = () => {
          if (isStarred) {
            dispatchHeroes({ type: 'REMOVE', id: hero.id });
          } else {
            dispatchHeroes({ type: 'ADD', id: hero.id });
          }
        };
        return (
          <ShowCard
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={
              hero.image ? hero.image.url : IMAGE_NOT_FOUND
            }
            biography={hero.biography}
            appearance={hero.appearance}
            onStarredClicked={onStarredClicked}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
