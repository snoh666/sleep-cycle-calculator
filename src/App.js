import React, { useSate } from 'react';
import './App.css';

function App() {
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useSate(0);

  const updateMinutesToWapeUp = e => {

  }
  return (
    <div className="App">
      <h1>Calculate sleep cycles</h1>
    </div>
  );
}

export default App;
