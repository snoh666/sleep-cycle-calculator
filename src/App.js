import React, { useState } from 'react';
import Hours from './components/Hours';
import Minutes from './components/Minutes';

function App() {
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useState(0);

  const updateMinutesToWapeUp = e => {

  }
  return (
    <div className="App">
      <h1>Calculate sleep cycles</h1>
      <div className="components-box">
        <Hours />
        <Minutes />
        <div className="result">
          { `Hours: ${hoursToWakeUp}, Minutes: ${minutesToWakeUp}` }
        </div>
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
