import React, { useState } from 'react';
import Values from './components/Values';
import Result from './components/Result';
import FallASleep from './components/Fall';

// Styled Components
import AppWrapper from './components/styled/AppWrapper';
import InfoText from './components/styled/InfoText';
import StyledFooter from './components/styled/StyledFooter';

function App() {
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useState(0);
  let [isAm, setIsAm] = useState(true);

  return (
    <AppWrapper>
      <h2>Calculate sleep cycles</h2>
      <div>
        <h4>You need to wake up at:</h4>
        <Values setHours={setHoursToWakeUp} setMinutes={setMinutesToWakeUp} setAm={setIsAm} />
        <hr/>
        <FallASleep setHours={setHoursToWakeUp} setMinutes={setMinutesToWakeUp} setAm={setIsAm} />
        <hr/>
        <Result hours={hoursToWakeUp} minutes={minutesToWakeUp} Am={isAm} />
      </div>
      <InfoText>
        A good night's sleep consists of 5-6 complete sleep cycles
      </InfoText>
      <StyledFooter>
        <div>
          <span>
            Created by <a href="https://github.com/snoh666" target="_blank" rel="noopener noreferrer">snoh666</a>
          </span>
        </div>
      </StyledFooter>
    </AppWrapper>
  );
}

export default App;
