import React from 'react';
import TimeStamp from './Timestamp';
import { getHoursToSleepBack, getHoursToWakeUpAt } from '../functions/getHours';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { getValues } from '../redux/actions';

function Result({ hours, minutes, isAm, isForw }) {
  const colors = [
    '#00c853',
    '#00bfa5',
    '#448aff',
    '#7c4dff',
    '#ff4081',
    '#ff5252',
  ];

  return (
    <ResultWrapper reverse={isForw}>
      <InfoWrapper>
        {isForw ? 'You should wake up at:' : 'You should fall a sleep at:'}
      </InfoWrapper>
      {(isForw
        ? getHoursToWakeUpAt(hours, minutes, isAm)
        : getHoursToSleepBack(hours, minutes, isAm)
      ).map((el, index) => {
        return (
          <TimeStamp
            hours={el.hours}
            minutes={el.minutes}
            color={colors[index]}
            key={el.id}
          />
        );
      })}
    </ResultWrapper>
  );
}

export default connect(getValues, null)(Result);

const ResultWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoWrapper = styled.p`
  width: 100%;
  margin: 10px 0;

  font-size: 1rem;
  font-weight: 100;
  color: ${props => props.theme.grey};
`;
