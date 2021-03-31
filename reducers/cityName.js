initialState = {
  cityName: "Search some city!",
};
const cityNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        cityName: action.payload.cityName,
      };

    default:
      return state;
  }
};

export default cityNameReducer;
