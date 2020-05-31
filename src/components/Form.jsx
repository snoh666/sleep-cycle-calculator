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
    let value;
    if (e === 'increase') {
      value = hours + 1;
    } else if (e === 'decrease') {
      value = hours - 1;
    } else {
      value = e.target.value;
    }

    if (value > 23) {
      if (e === 'increase') {
        setHours(0);
      } else {
        setHours(23);
      }
    } else if (value < 0 || value.length === 0) {
      if (e === 'decrease') {
        setHours(0);
      } else {
        setHours(23);
      }
    } else {
      setHours(parseInt(value));
    }
  };

  const updateMinutes = e => {
    let value;
    if (e === 'increase') {
      value = minutes + 1;
    } else if (e === 'decrease') {
      value = minutes - 1;
    } else {
      value = e.target.value;
    }

    if (value > 59) {
      if (e === 'increase') {
        setMinutes(0);
      } else {
        setMinutes(59);
      }
    } else if (value < 0 || value.length === 0) {
      if (e === 'decrease') {
        setMinutes(59);
      } else {
        setMinutes(0);
      }
    } else {
      setMinutes(parseInt(value));
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
              <InputWrapper>
                <InputArrow isUp onClick={_ => updateHours('increase')} />
                <StyledInput
                  type='number'
                  max='24'
                  value={hours}
                  onChange={updateHours}
                  align='end'
                  readonly
                />
                <InputArrow onClick={_ => updateHours('decrease')} />
              </InputWrapper>
              <span>:</span>
              <InputWrapper>
                <InputArrow isUp onClick={_ => updateMinutes('increase')} />
                <StyledInput
                  type='number'
                  max='60'
                  value={minutes}
                  onChange={updateMinutes}
                />
                <InputArrow onClick={_ => updateMinutes('decrease')} />
              </InputWrapper>
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

const InputWrapper = styled.div`
  display: inline-block;
  width: auto;
  max-width: 75px;

  position: relative;
`;

const InputArrow = styled.div`
  position: absolute;
  ${props => {
    if (props.isUp) {
      return 'top: -15px;';
    }

    return 'bottom: -15px;';
  }}
  left: 50%;
  transform: translateX(-50%);

  width: 30px;
  height: 15px;
  background-color: ${props => props.theme.grey};
`;

const StyledInput = styled.input`
  width: 100%;

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
  margin-top: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.greyDark};
  font-weight: 200;
`;
