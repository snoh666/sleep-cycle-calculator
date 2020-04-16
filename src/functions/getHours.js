const getHoursToSleepBack = (hrs, min, isAM) => {
  const dayMinutes = isAM ? hrs * 60 + min : hrs * 60 + min + 12 * 60; // Getting time in day elapsed minutes

  let timeStamps = [];

  for (let i = 6; i >= 1; i--) {
    const timeForTimestamp = Number(
      dayMinutes - (i === 1 ? 90 : 90 * i) > 0
        ? dayMinutes - (i === 1 ? 90 : 90 * i)
        : dayMinutes - (i === 1 ? 90 : 90 * i) + 1440
    );

    const hours = Math.floor(timeForTimestamp / 60);

    timeStamps.push({
      hours: hours === 24 ? '00' : hours,
      minutes: Math.floor(timeForTimestamp % 60),
      id: dayMinutes - (i === 1 ? 90 : 90 * i),
    });
  }

  return timeStamps;
};

const getHoursToWakeUpAt = (hrs, min, isAM) => {
  const dayMinutes = isAM ? hrs * 60 + min : hrs * 60 + min + 12 * 60;

  let timeStamps = [];

  for (let i = 6; i >= 1; i--) {
    const timeForTimestamp = Number(
      dayMinutes + (i === 1 ? 90 : 90 * i) > 0
        ? dayMinutes + (i === 1 ? 90 : 90 * i)
        : dayMinutes + (i === 1 ? 90 : 90 * i) + 1440
    );

    const hours =
      Math.floor(timeForTimestamp / 60) > 24
        ? Math.floor(timeForTimestamp / 60) % 24
        : Math.floor(timeForTimestamp / 60);

    timeStamps.push({
      hours: hours === 24 ? '00' : hours,
      minutes: Math.floor(timeForTimestamp % 60),
      id: dayMinutes + (i === 1 ? 90 : 90 * i),
    });
  }

  return timeStamps;
};

export { getHoursToSleepBack, getHoursToWakeUpAt };
