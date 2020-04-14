import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import FallASleep from './components/Fall';

import styled from 'styled-components';
// Styled Components
import InfoText from './components/styled/InfoText';

/*
  TODO:
*/

function App() {
  return (
    <AppWrapper>
      <header>
        <Header />
      </header>
      <Form />
      <div>
        <FallASleep />
        <Result />
      </div>
      <InfoText>
        A good night's sleep consists of 5-6 complete sleep cycles
      </InfoText>
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
