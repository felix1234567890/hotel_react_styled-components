import styled from 'styled-components';
import Btn from './Button';

export default styled(Btn)`
  display: block;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.purpleSolid};
  :hover {
    background-color: ${({ theme }) => theme.purpleLight};
  }
`;
