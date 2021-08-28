import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    // https://superheroapi.com/api/5995732007165992/search/name
    // ?maxResults=${maxResults}&startIndex=${startIndex}
    fetch(
      `https://superheroapi.com/api.php/5995732007165992/search/${input}`
    )
      .then(res => res.json())
      .then(
        result => console.log(result),
        error => console.log(error)
      );
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
