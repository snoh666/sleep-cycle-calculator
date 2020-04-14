import React from 'react';
import styled from 'styled-components';

function TimeStamp(props) {
  const { hours, minutes, color } = props;

  return (
    <TimestampWrapper className='timestamp' fontColor={color}>
      <span>{hours}</span>:
      <span>{minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes}</span>
    </TimestampWrapper>
  );
}

export default TimeStamp;

const TimestampWrapper = styled.div`
  font-size: 1rem;
  font-weight: 100;
  color: ${props => props.fontColor};
`;
