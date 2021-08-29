import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #ff7600;

      &:hover {
        text-decoration-color: blue;
        color: #52006a;
      }
    }

    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      color: #8e8e8e;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        background-color: #ff7600;
        color: #fff;
      }
    }
  }
`;
