import React, { useState } from 'react';
import Values from './components/Values';
import Result from './components/Result';

function App() {
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useState(0);
  let [isAm, setIsAm] = useState(true);

  return (
    <div className="App">
      <h1>Calculate sleep cycles</h1>
      <div className="components-box">
        <Values setHours={setHoursToWakeUp} setMinutes={setMinutesToWakeUp} setAm={setIsAm} />
        <Result hours={hoursToWakeUp} minutes={minutesToWakeUp} Am={isAm} />
      </div>
      <footer>
        <div>
          <span>Created by snoh666</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
