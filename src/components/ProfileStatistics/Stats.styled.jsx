import styled from '@emotion/styled';

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  li {
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #cfcfcf;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      font-size: 20px;
    }
    .quantity {
      font-weight: 700;
      margin-top: 7px;
    }
  }
`;
