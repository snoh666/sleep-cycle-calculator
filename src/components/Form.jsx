import React from 'react'
import FormWrapper from './styled/FormWrapper';
import StyledSelect from './styled/StyledSelect';

function Form({ setHours, setMinutes, setAm, setForward }) {

  const updateHours = e => {
    const { target: { value } } = e;
    if(value !== 'null') {
      setHours(Number(value));
    }

    setForward(false);
  }
  const updateMinutes = e => {
    const { target: { value } } = e;
    if(value !== 'null') {
      setMinutes(Number(value));
    }

    setForward(false);
  }
  const updateAm = e => {
    const { target: { value } } = e;
    if(value === 'am') {
      setAm(true);
    } else if(value === 'pm') {
      setAm(false);
    }

    setForward(false);
  }

  return (
    <FormWrapper>
      <StyledSelect id="hours" onChange={updateHours}>
        <option value="null">(hour)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </StyledSelect>
      <StyledSelect id="minutes" onChange={updateMinutes}>
        <option value="null">(minutes)</option>
        <option value="0">00</option>
        <option value="5">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </StyledSelect>
      <StyledSelect id="am-pm" onChange={updateAm}>
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </StyledSelect>
    </FormWrapper>
  );
}

export default Form;