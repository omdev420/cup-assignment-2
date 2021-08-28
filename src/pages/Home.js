import React, { useState } from 'react';
import axios from 'axios';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    // https://superheroapi.com/api/5995732007165992/search/name
    // ?maxResults=${maxResults}&startIndex=${startIndex}
    axios
      .get(
        `https://superheroapi.com/api/5995732007165992/search/${input}`
        // {
        //   headers: {
        //     'access-control-allow-credentials': 'false',
        //     'access-control-allow-headers':
        //       'Origin, X-Requested-With, Content-Type, Accept',
        //     'access-control-allow-methods': 'GET',
        //     'access-control-allow-origin': '*',
        //   },
        // }
      )
      .then(response => response.json())
      .then(
        result => console.log(result),
        error => console.log(error)
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
    </MainPageLayout>
  );
};

export default Home;
