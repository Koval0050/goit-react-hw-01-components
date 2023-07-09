import styled from '@emotion/styled';

export const SectionStatictics = styled.section`
  width: 500px;
  border: 2px solid #347285;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  .title {
    text-transform: uppercase;
  }
  ul {
    display: flex;
    list-style: none;
    column-gap: 30px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      font-size: 25px;
      width: 100%;
      .label {
        font-size: 20px;
      }
      .percentage {
        font-size: 23px;
        font-weight: 600;
      }
    }
  }
`;
