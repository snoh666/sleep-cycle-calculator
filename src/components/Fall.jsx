import React from 'react'
import { connect } from "react-redux";
import { setHrsMins, setForward } from '../redux/actions';
import StyledButton from './styled/StyledButton';


function FallASleep({ setForward, setHrsMins }) {

  const updateTimeHours = () => {
    const date = new Date();
    const nowTime = {
      hours: date.getHours(),
      minutes: date.getMinutes() + 20, // Add 20 minutes to have time to fall a sleep
      isAm: true
    };

    if(nowTime.hours > 12 && nowTime.hours <= 24) {
      nowTime.isAm = false;
      nowTime.hours = Math.floor(nowTime.hours % 12);
    } else if(nowTime.hours > 24) {
      nowTime.hours %= 24;
      if(nowTime.hours > 12 && nowTime.hours <= 24) {
        nowTime.isAm = false;
        nowTime.hours = Math.floor(nowTime.hours % 12);
      }
    }
    setHrsMins({
      hrs: nowTime.hours,
      min: nowTime.minutes,
      isAm: nowTime.isAm
    });

    setForward(true);

  }

  return (
    <div className="Fall">
      <StyledButton onClick={updateTimeHours} >Zzz..</StyledButton>
    </div>
  );
}

export default connect(
  null,
  { setHrsMins, setForward }
)(FallASleep);