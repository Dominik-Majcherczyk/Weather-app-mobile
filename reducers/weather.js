import { fetchCityWeatherInfo } from "../actions/index";
initialState = {};
const cityWeatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY_WEATHER":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const findCityWeatherInfo = (cityKey) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=wfRGVnT6Q4hZtR749uYozqHKCe1FHKE3`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCityWeatherInfo(data)))
    .catch(() => console.log("error"));
};

export default cityWeatherInfoReducer;
