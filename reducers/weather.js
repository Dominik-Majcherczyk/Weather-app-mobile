import { fetchCityWeatherInfo } from "../actions/index";
initialState = {
  isDayTime: "",
  localObservationDateTime: "",
  temperature: {},
};
//payload: {isDayTime: cityWeatherInfo.IsDayTime,localObservationDateTime: cityWeatherInfo.LocalObservationDateTime,temperature:cityWeatherInfo.Temperature}
const cityWeatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY_WEATHER":
      // console.log("city weather info w store:");
      // console.log(action.payload);
      return {
        ...state,
        isDayTime: action.payload.isDayTime,
        localObservationDateTime: action.payload.localObservationDateTime,
        temperature: action.payload.temperature,
      };
    default:
      return state;
  }
};

export const findCityWeatherInfo = (cityKey) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=IBlxYAzVjiLPMh36fO92RSpGIOaJj9IY`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCityWeatherInfo(data[0])))
    .catch(() =>
      console.log("zwrócono error w bloku catch thunka find city weather info")
    );
};

export default cityWeatherInfoReducer;
