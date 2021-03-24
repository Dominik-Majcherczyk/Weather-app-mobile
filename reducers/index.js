import cityReducer from "./city";
import cityWeatherInfoReducer from "./weather";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  citiesData: cityReducer,
  cityWeatherInfo: cityWeatherInfoReducer,
});

export default rootReducer;
