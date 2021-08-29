import React from 'react';
import { Heading } from './MainPageLayout.styled';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <Heading>
      <Title
        title="Hero Universe"
        subtitle="Find your heroes"
      />
      <Nav />
      {children}
    </Heading>
  );
};

export default MainPageLayout;
