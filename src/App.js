import React, { useState } from 'react';
import Values from './components/Values';
import Result from './components/Result';

function App() {
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useState(0);
  let [isAm, setIsAm] = useState(true);

  return (
    <div className="App">
      <h2>Calculate sleep cycles</h2>
      <div className="components-box">
        <h4>You need to wake up at:</h4>
        <Values setHours={setHoursToWakeUp} setMinutes={setMinutesToWakeUp} setAm={setIsAm} />
        <hr/>
        <Result hours={hoursToWakeUp} minutes={minutesToWakeUp} Am={isAm} />
      </div>
      <div className="info">A good night's sleep consists of 5-6 complete sleep cycles</div>
      <footer>
        <div>
          <span>Created by <a href="https://github.com/snoh666" target="_blank" rel="noopener noreferrer">snoh666</a></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
