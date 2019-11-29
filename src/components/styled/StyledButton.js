import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 1px solid #fff;
  padding: .4rem 2rem;
  border-radius: 8px;
  transition: transform .4s ease-in-out;
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
  }
`;

export default StyledButton