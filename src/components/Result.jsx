import React from 'react';
import { getHoursToSleepBackChart } from '../functions/getHours';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { getValues } from '../redux/actions';
import Chart from './Chart';

function Result({ hours, minutes, isAm, isForw }) {
  const data = [...getHoursToSleepBackChart(hours, minutes, isAm)].map(el => ({
    name: `${el.hours}:${el.minutes}`,
    uv: el.value,
  }));

  console.log(data);

  return (
    <ResultWrapper>
      <InfoWrapper>You should fall asleep at one of the hills</InfoWrapper>
      <Chart data={data} />
    </ResultWrapper>
  );
}

export default connect(getValues, null)(Result);

const ResultWrapper = styled.div`
  max-width: 500px;
  margin: 20px 0;
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
