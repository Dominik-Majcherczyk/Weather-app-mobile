import { fetchCityWeatherInfo } from "../actions/index";
initialState = {};
const cityWeatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY_WEATHER":
      console.log("city weather info w store:");
      console.log(action.payload);
      return action.payload[0];
    default:
      return state;
  }
};

export const findCityWeatherInfo = (cityKey) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=IBlxYAzVjiLPMh36fO92RSpGIOaJj9IY`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCityWeatherInfo(data)))
    .catch(() =>
      console.log("zwrócono error w bloku catch thunka find city weather info")
    );
};

export default cityWeatherInfoReducer;
