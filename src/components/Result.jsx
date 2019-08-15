import React from 'react'

function Result({ hours, minutes, Am }) {

  const calculateMinutes = ({hrs, min, am}) => {
    let result = hrs * 60 + min;
    return am ? result : result + 12;
  }

  return (
    <div>
      {`Hours: ${hours}, Minutes: ${minutes}, Am: ${Am}`}
      <br/>
      {`Whole minutes: ${calculateMinutes({hrs: hours, min: minutes, am: Am})}`}
    </div>
  );
}

export default Result;