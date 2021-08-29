import styled from 'styled-components';

export const MainData = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
  justify-content: flex-start;
  align-items: center;

  .img-wrapper {
    width: 25vw;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #ddd;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .info-wrapper {
    margin: 50px;
    text-align: center;

    ul {
      padding: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style-type: none;

      li {
        height: 20%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          padding: 5px 0 0;
          width: 60px;
        }
      }
    }
  }
`;
