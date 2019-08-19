import React from 'react'

function FallASleep({ setHours, setMinutes, setAm }) {

  const sleepNow = () => {
    const time = new Date();
    let sumTime = time.getMinutes() + time.getHours() * 60;

    console.log(sumTime + 540);

  }

  return (
    <div className="Fall">
      <button onClick={sleepNow} >Zzz..</button>
    </div>
  );
}

export default FallASleep;