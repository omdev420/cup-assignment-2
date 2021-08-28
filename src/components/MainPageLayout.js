import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Hero Universe"
        subtitle="Find your heroes"
      />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
