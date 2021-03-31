import { fetchCityWeatherInfo } from "../actions/index";
initialState = {
  isDayTime: null,
  localObservationDateTime: "",
  temperature: {},
  weatherIcon: "",
  weatherText: null,
};
//payload: {isDayTime: cityWeatherInfo.IsDayTime,localObservationDateTime: cityWeatherInfo.LocalObservationDateTime,temperature:cityWeatherInfo.Temperature}
const cityWeatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY_WEATHER":
      // console.log("city weather info w store:");
      // console.log(action.payload);
      return {
        isDayTime: action.payload.isDayTime,
        localObservationDateTime: action.payload.localObservationDateTime,
        temperature: action.payload.temperature,
        weatherIcon: action.payload.weatherIcon,
        weatherText: action.payload.weatherText,
      };
    default:
      return state;
  }
};

export const findCityWeatherInfo = (cityKey) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=wfRGVnT6Q4hZtR749uYozqHKCe1FHKE3`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCityWeatherInfo(data[0])))
    .catch(() =>
      console.log("zwrócono error w bloku catch thunka find city weather info")
    );
};

export default cityWeatherInfoReducer;
