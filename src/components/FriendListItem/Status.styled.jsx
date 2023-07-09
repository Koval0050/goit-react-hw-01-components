import styled from '@emotion/styled';

const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export default Status;
