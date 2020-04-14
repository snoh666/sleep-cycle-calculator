import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import FallASleep from './components/Fall';

import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <header>
        <Header />
      </header>
      <Form />
      <Result />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  background: ${props => props.theme.darkBlue};
`;
