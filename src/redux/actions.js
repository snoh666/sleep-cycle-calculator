const setHours = args => ({ type: 'SET_JUST_HRS', item: args });

const setMinutes = args => ({ type: 'SET_JUST_MINS', item: args });

const setAm = args => ({ type: 'SET_JUST_AM', item: args });

const setHrsMins = args => ({ type: 'SET_HRS_AND_MINS', item: args });

const setForward = args => ({ type: 'SET_FORWARD', item: args });

const getValues = state => ({
  hours: state.hoursToWakeUp,
  minutes: state.minutesToWakeUp,
  isAm: state.isAm,
  isForw: state.isForward,
});

export { setHours, setMinutes, setAm, setHrsMins, setForward, getValues };
