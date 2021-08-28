import React, { useState } from 'react';
import axios from 'axios';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');
  let res;
  let err = null;

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    // https://superheroapi.com/api/5995732007165992/search/name
    // ?maxResults=${maxResults}&startIndex=${startIndex}
    axios
      .get(
        `https://superheroapi.com/api/5995732007165992/search/${input}`
      )
      .then(response => response.json())
      .then(
        result => {
          res = result;
        },
        error => {
          err = error;
        }
      );
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <div>
        Res: {res} Error: {err}
      </div>
    </MainPageLayout>
  );
};

export default Home;
