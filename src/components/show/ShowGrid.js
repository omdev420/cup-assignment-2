import React from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(hero => (
        <ShowCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          image={
            hero.image ? hero.image.url : IMAGE_NOT_FOUND
          }
          biography={hero.biography}
          appearance={hero.appearance}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
