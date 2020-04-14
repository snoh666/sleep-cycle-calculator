import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>Sleep calculator</StyledHeader>
      <StyledSubHeader>Calculate!</StyledSubHeader>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;

  width: 100%;
  height: 60px;
  padding: 5px 0;

  top: 0;
  left: 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const StyledHeader = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.grey};
  text-transform: uppercase;
  font-weight: normal;
`;

const StyledSubHeader = styled.h2`
  font-size: 0.9rem;
  color: ${(props) => props.theme.greyDark};
  margin: 0;
`;
