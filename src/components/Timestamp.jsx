import React from 'react'

function TimeStamp(props) {
  const {hours, minutes, color} = props;

  return(
    <div className="timestamp" style={{color: color}}>
      <span>{hours}</span>
      :
      <span>{minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes}</span>
    </div>
  )
}

export default TimeStamp;