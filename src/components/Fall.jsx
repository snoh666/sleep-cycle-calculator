import React from 'react'

function FallASleep({ setHours, setMinutes, setAm, setForward }) {

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

    console.log(nowTime);

    setHours(nowTime.hours);
    setMinutes(nowTime.minutes);
    setAm(nowTime.isAm);
    setForward(true);
  }

  return (
    <div className="Fall">
      <button onClick={updateTimeHours} >Zzz..</button>
    </div>
  );
}

export default FallASleep;