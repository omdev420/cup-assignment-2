import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Hero = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    apiGet(`${id}`).then(result => {
      setHero(result);
    });
  }, [id]);

  console.log(hero);

  return <div>Hero</div>;
};

export default Hero;
