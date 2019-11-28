/*
  let [hoursToWakeUp, setHoursToWakeUp] = useState(0);
  let [minutesToWakeUp, setMinutesToWakeUp] = useState(0);
  let [isAm, setIsAm] = useState(true);
  let [isForward, setIsForward] = useState(false);
*/

const initialState = {
 hoursToWakeUp: 0,
 minutesToWakeUp: 0,
 isAm: true,
 isForward: false
};

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case 'SET_JUST_HRS':
      return {
        ...state,
        hoursToWakeUp: action.item,
      };
    case 'SET_JUST_MINS':
      return {
        ...state,
        minutesToWakeUp: action.item,
      };
    case 'SET_JUST_AM':
      return {
        ...state,
        isAm: action.item,
      };
    case 'SET_HRS_AND_MINS' :
      return {
        ...state,
        hoursToWakeUp: action.item.hrs,
        minutesToWakeUp: action.item.min,
        isAm: action.item.isAm,
      };
    case 'SET_FORWARD':
      return {
        ...state,
        isForward: action.item,
      };
    default:
      return state;
  }
}

export default reducer;