import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;

    li:first-child {
      padding-right: 10px;
    }

    li {
      a {
        text-decoration: none;
        color: #ff7600;

        &:hover {
          color: #ffa900;
        }

        &::after {
          content: '';
        }
      }
    }
  }

  input {
    outline: none;
    border: 1px solid #52006a;
    border-radius: 30px;
    width: 400px;
    caret-color: #52006a;
    color: #cc3298;
    text-align: center;
    height: 30px;
    margin: 20px auto;
  }
  button:first-of-type {
    margin: 20px auto;
    height: 30px;
    width: 90px;
    border-radius: 30px;
    border: none;
    background-color: #52006a;
    color: #fff;

    &:hover {
      color: #52006a;
      background-color: #fff;
      border: 1px solid #52006a;
    }
  }

  a {
    text-decoration: none;

    &::after {
      content: ' »';
    }
  }
`;
