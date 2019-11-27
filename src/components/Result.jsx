import React from 'react'
import TimeStamp from './Timestamp';
import { getHoursToSleepBack, getHoursToWakeUpAt } from '../functions/getHours';

import ResultWrapper from './styled/ResultWrapper';

function Result({ hours, minutes, Am, isForward }) {

  const colors = [
    '#2ecc71',
    '#27ae60',
    '#3498db',
    '#2980b9',
    '#9b59b6',
    '#c0392b'
  ];

  return (
    <ResultWrapper reverse={isForward}>
      {(isForward ? getHoursToWakeUpAt(hours, minutes, Am) : getHoursToSleepBack(hours, minutes, Am)).map((el, index) => {
        return (
          <TimeStamp hours={el.hours} minutes={el.minutes} color={colors[index]} key={el.id} />
        );
      })}
    </ResultWrapper>
  );
}

export default Result;