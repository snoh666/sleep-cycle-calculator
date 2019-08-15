import React from 'react'
import TimeStamp from './Timestamp';

function Result({ hours, minutes, Am }) {

  const colors = [
    '#2ecc71',
    '#27ae60',
    '#3498db',
    '#2980b9',
    '#9b59b6',
    '#8e44ad',
    '#c0392b'
  ];

  const calculateMinutes = ({hrs, min, am}) => {
    let result = hrs * 60 + min;
    return am ? result : result + 12 * 60;
  }

  const showHoursToSleep = (dayMinutes) => {

    /*
      Every sleep cycle is 90 minutes long
      User gives time we coonvert it to minutes elapsed from mid night thanks to am and pm in eng
      We have to convert it to timestamps
      720 = 12 hours in minutes

      Now we have to create loop that is going to calculate every hour
    */

    let timeStamps = [];

    for(let i = 7; i >= 1; i--) {
      timeStamps.push({
        hours: Math.floor(
          (dayMinutes - (
            i === 1 ? 90 : 90 * i
          )) / 60
        ),
        minutes: Math.floor(
          (dayMinutes - (
            i === 1 ? 90 : 90 * i
          )) % 60
        ),
        id: dayMinutes - (
          i === 1 ? 90 : 90 * i
        )
      })
    }

    return timeStamps;
  }

  return (
    <div className="Result">
      {showHoursToSleep(calculateMinutes({ hrs: hours, min: minutes, am: Am })).map((el, index) => {
        return (
          <TimeStamp hours={el.hours} minutes={el.minutes} color={colors[index]} key={el.id} />
        );
      })}
    </div>
  );
}

export default Result;