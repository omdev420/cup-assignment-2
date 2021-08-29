import React from 'react';
import styled from 'styled-components';

const Title = ({ title, subtitle }) => {
  return (
    <Head>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Head>
  );
};

const Head = styled.div`
  h1 {
    font-size: 2.3rem;
    margin: 20px 0 0px 0;
    color: #cd113b;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p {
    margin: 0 0 10px 0;
    color: #23113b;
  }
`;

export default Title;
