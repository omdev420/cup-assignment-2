import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    apiGet(`search/${input}`).then(
      result => setResults(result.results)
      //   error => console.log(error)
    );
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const renderResults = () => {
    if (
      (results && results.length === 0) ||
      results === undefined
    ) {
      return <div>😔 No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <FadeIn>
          <ShowGrid data={results} />
        </FadeIn>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for you hero"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
