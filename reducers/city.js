import { fetchCity, fetchCityError } from "../actions/index";
initialState = {
  cities: "",
  error: "",
};
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY":
      return {
        ...state,
        cities: action.payload.cities,
      };
    case "GET_CITY_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};

export const findCity = (city) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=wfRGVnT6Q4hZtR749uYozqHKCe1FHKE3&q=${city}`
  )
    .then((res) => res.json())
    .then((data) => dispatch(fetchCity(data)))
    .catch(() => dispatch(fetchCityError({ error: true })));
};

export default cityReducer;
