import cityReducer from "./city";
import cityWeatherInfoReducer from "./weather";
import cityNameReducer from "./cityName";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  citiesData: cityReducer,
  cityWeatherInfo: cityWeatherInfoReducer,
  cityName: cityNameReducer,
});

export default rootReducer;
