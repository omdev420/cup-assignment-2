import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({
  id,
  name,
  image,
  biography,
  appearance,
}) => {
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img
          src={image}
          alt={`${biography['full-name']}`}
        />
      </div>
      <h1>
        {name}
        {appearance.gender
          ? `(${appearance.gender})`
          : null}
      </h1>
      <p>
        {biography['full-name'] !== 'null'
          ? `Full name: ${biography['full-name']}`
          : 'Undisclosed name'}
      </p>
      <p>
        {appearance.race !== 'null'
          ? `Race: ${appearance.race}`
          : 'Unknown race'}
      </p>

      <div className="btns">
        <Link to={`/hero/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
