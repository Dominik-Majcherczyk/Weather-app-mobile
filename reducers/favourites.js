initialState = [];
const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      let newState = state;
      return newState.push(action.payload);
    default:
      return state;
  }
};

export default favReducer;
