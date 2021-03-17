import cityReducer from "./city";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityData: cityReducer,
});

export default rootReducer;
