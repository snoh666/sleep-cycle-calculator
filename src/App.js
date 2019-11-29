import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import FallASleep from './components/Fall';

// Styled Components
import AppWrapper from './components/styled/AppWrapper';
import InfoText from './components/styled/InfoText';
import StyledFooter from './components/styled/StyledFooter';

/*
  TODO:
  - Fix bug with not PM working
*/

function App() {

  return (
    <AppWrapper>
      <h2>Calculate sleep cycles</h2>
      <div>
        <h4>You need to wake up at:</h4>
        <Form />
        <hr/>
        <FallASleep />
        <hr/>
        <Result />
      </div>
      <InfoText>
        A good night's sleep consists of 5-6 complete sleep cycles
      </InfoText>
      <StyledFooter>
          <span>
            Created by <a href="https://github.com/snoh666" target="_blank" rel="noopener noreferrer">snoh666</a>
          </span>
      </StyledFooter>
    </AppWrapper>
  );
}

export default App;
