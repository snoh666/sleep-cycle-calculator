import React from 'react'
import TimeStamp from './Timestamp';

function Result({ hours, minutes, Am }) {

  const colors = [
    '#2ecc71',
    '#27ae60',
    '#3498db',
    '#2980b9',
    '#9b59b6',
    '#c0392b'
  ];

  const showHoursToSleep = () => {
    const dayMinutes = Am ? hours * 60 + minutes : hours * 60 + minutes + 12 * 60;

    let timeStamps = [];

    for(let i = 6; i >= 1; i--) {
      const timeForTimestamp = Number((dayMinutes - (i === 1 ? 90 : 90 * i) > 0 ?
        dayMinutes - (i === 1 ? 90 : 90 * i) :
        dayMinutes - (i === 1 ? 90 : 90 * i) + 1440));

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