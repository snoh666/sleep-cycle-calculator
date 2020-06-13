const getHoursToSleepBackChart = (hrs, min, isAM) => {
  const dayMinutes = isAM ? hrs * 60 + min : hrs * 60 + min + 12 * 60; // Getting time in day elapsed minutes

  let timeStamps = [];

  for (let i = 12; i >= 1; i--) {
    const timeForTimestamp = Number(
      dayMinutes - (i === 1 ? 45 : 45 * i) > 0
        ? dayMinutes - (i === 1 ? 45 : 45 * i)
        : dayMinutes - (i === 1 ? 45 : 45 * i) + 1440
    );

    const hours = Math.floor(timeForTimestamp / 60);

    timeStamps.push({
      hours: hours === 24 ? '00' : hours,
      minutes: Math.floor(timeForTimestamp % 60),
      id: dayMinutes - (i === 1 ? 45 : 45 * i),
      value: i % 2 === 0 ? (i % 2) + 0.25 : (i % 2) - 0.25,
    });
  }

  return timeStamps;
};

export { getHoursToSleepBackChart };
