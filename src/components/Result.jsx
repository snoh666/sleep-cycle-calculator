import React from 'react'

function Result({ hours, minutes, Am }) {

  return (
    <div>
      {`Hours: ${hours}, Minutes: ${minutes}, Am: ${Am}`}
    </div>
  );
}

export default Result;