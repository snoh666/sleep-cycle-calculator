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

  const showHoursToSleep = () => {
    const dayMinutes = Am ? hours * 60 + minutes : hours * 60 + minutes + 12 * 60;
    /*
      Every sleep cycle is 90 minutes long
      User gives time we coonvert it to minutes elapsed from mid night thanks to am and pm in eng
      We have to convert it to timestamps
      720 = 12 hours in minutes

      Now we have to create loop that is going to calculate every hour

      dayMinutes - ( i === 1 ? 90 : 90 * i )

      (dayMinutes - ( i === 1 ? 90 : 90 * i )> 0 ? dayMinutes - ( i === 1 ? 90 : 90 * i ) : dayMinutes - ( i === 1 ? 90 : 90 * i ) + 1440)
    */

    let timeStamps = [];

    for(let i = 7; i >= 1; i--) {
      const timeForTimestamp = Number((dayMinutes - (i === 1 ? 90 : 90 * i) > 0 ? dayMinutes - (i === 1 ? 90 : 90 * i) : dayMinutes - (i === 1 ? 90 : 90 * i) + 1440));
      timeStamps.push({
        hours: Math.floor(
          timeForTimestamp
          / 60
        ),
        minutes: Math.floor(
          timeForTimestamp
          % 60
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
      {showHoursToSleep().map((el, index) => {
        return (
          <TimeStamp hours={el.hours} minutes={el.minutes} color={colors[index]} key={el.id} />
        );
      })}
    </div>
  );
}

export default Result;