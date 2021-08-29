/* eslint-disable no-unused-vars */
import React from 'react';

const Details = ({
  placeOfBirth,
  firstApperance,
  gender,
  race,
  height,
  weight,
  eyeColor,
  hairColor,
}) => {
  return (
    <div>
      <div>
        <h2>Details</h2>
        <p>
          {placeOfBirth !== '-'
            ? `Born at ${placeOfBirth}`
            : null}
        </p>
        <p>First appeared in {firstApperance} </p>
        <p>{gender}</p>
        <p>{race !== 'null' ? race : 'Unknown'} race</p>
        <p>{height !== '-' ? `Height: ${height}` : null}</p>
        <p>
          {weight !== '- lb' ? `Weight: ${weight}` : null}
        </p>
        <p>
          {eyeColor !== '-'
            ? `Eye color: ${eyeColor}`
            : null}
        </p>
        <p>
          {hairColor !== '-'
            ? `Hair color: ${hairColor}`
            : null}
        </p>
      </div>
    </div>
  );
};

export default Details;
