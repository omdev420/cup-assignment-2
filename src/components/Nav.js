import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/favorite', text: 'Favorites' },
];

const Nav = () => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {LINKS.map(link => (
          <li key={link.to}>
            <Links
              to={link.to}
              className={
                link.to === location.pathname
                  ? 'active'
                  : ''
              }
            >
              {link.text}
            </Links>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

const Links = styled(Link)`
  &.active {
    color: red;
    border-bottom: 2px solid red;
  }
`;
