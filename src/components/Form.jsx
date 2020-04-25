import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setHrsMins } from '../redux/actions';

function Form({ setHrsMins }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timeoutId, setTimeoutId] = useState('');
  const formElement = useRef();

  const updateHours = e => {
    const { value } = e.target;

    if (value > 24) {
      setHours(24);
    } else if (value < 0 || value.length === 0) {
      setHours(0);
    } else {
      e.target.value = parseInt(e.target.value);
      setHours(parseInt(e.target.value));
    }
  };

  const updateMinutes = e => {
    const { value } = e.target;

    if (value > 60) {
      setMinutes(60);
    } else if (value < 0 || value.length === 0) {
      setMinutes(0);
    } else {
      e.target.value = parseInt(e.target.value);
      setMinutes(parseInt(e.target.value));
    }
  };

  const onFormChange = e => {
    if (timeoutId) {
      clearInterval(timeoutId);
      setTimeoutId(true);
    }

    const staticTimeoutId = setTimeout(_ => {
      formElement.current.dispatchEvent(new Event('submit'));
    }, 1000);

    setTimeoutId(staticTimeoutId);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const flooredHours = Math.floor(hours % 12);

    setHrsMins({
      hrs: flooredHours,
      min: minutes,
      isAm: hours <= 12,
    });
  };

  return (
    <StyledSection>
      <ClockWrapper>
        <ClockContent>
          <TimeOutput>
            <form
              ref={formElement}
              onSubmit={handleSubmit}
              onChange={onFormChange}
            >
              <StyledInput
                type='number'
                max='24'
                value={hours}
                onChange={updateHours}
                align='end'
              />
              <span>:</span>
              <StyledInput
                type='number'
                max='60'
                value={minutes}
                onChange={updateMinutes}
              />
            </form>
          </TimeOutput>
          <StyledSubInfo>Edit above</StyledSubInfo>
        </ClockContent>
      </ClockWrapper>
    </StyledSection>
  );
}

export default connect(null, { setHrsMins })(Form);

const StyledSection = styled.section`
  width: 100%;
  max-width: 300px;

  margin: 20px auto;
`;

const ClockWrapper = styled.div`
  width: 100%;
  padding-top: 100%;

  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 100%;

    background: linear-gradient(to top right, #6a89cc, #1e3799);
    z-index: 0;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;

    width: 100%;
    height: 30%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: radial-gradient(
      circle at bottom,
      ${props => props.theme.darkBlue} 40%,
      transparent
    );
  }
`;

const ClockContent = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;

  border: 5px solid transparent;
  border-radius: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.darkBlue};
`;

const TimeOutput = styled.div`
  font-size: 3rem;
  letter-spacing: 2.5px;
  font-weight: 100;
`;

const StyledInput = styled.input`
  width: auto;
  max-width: 75px;

  background: transparent;
  border: none;

  text-align: ${props => (props.align === 'end' ? 'end' : 'start')};
  padding: 0 0.25rem;

  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.grey};
  font-size: 3rem;
  letter-spacing: 2.5px;
  font-weight: 100;
`;

const StyledSubInfo = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: ${props => props.theme.greyDark};
  font-weight: 200;
`;
