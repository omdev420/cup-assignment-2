import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({
  id,
  name,
  image,
  biography,
  appearance,
}) => {
  return (
    <div>
      <div>
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
        {biography['full-name']
          ? `Full name: ${biography['full-name']}`
          : null}
      </p>
      <p>Race: {appearance.race}</p>

      <div>
        <Link to={`/hero/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
