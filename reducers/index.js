import cityReducer from "./city";
import cityWeatherInfoReducer from "./weather";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityData: cityReducer,
  cityWeatherInfo: cityWeatherInfoReducer,
});

export default rootReducer;
