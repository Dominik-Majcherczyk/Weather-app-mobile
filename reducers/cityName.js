initialState = {
  cityName: "Search some city!",
  cityKey: "",
};
const cityNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        cityName: action.payload.cityName,
        cityKey: action.payload.cityKey,
      };

    default:
      return state;
  }
};

export default cityNameReducer;
