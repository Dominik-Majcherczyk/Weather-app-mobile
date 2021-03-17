import { fetchCity, fetchCityError } from "../actions/index";
initialState = {
  cityName: "",
  cityId: "",
  error: false,
};
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY":
      console.log(action.payload);
      return {
        ...state,
        cityName: action.payload.cityName,
        cityId: action.payload.cityId,
        error: false,
      };
    case "GET_CITY_ERROR":
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export const findCity = (city) => async (dispatch) => {
  await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lxxucFd3EEaDSpxcFbTVyROFKL3tWxsG&q=${city}`
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch(
        fetchCity({ cityName: data[0].LocalizedName, cityId: data[0].Key })
      )
    )
    .catch(() => dispatch(fetchCityError({ error: true })));
};

export default cityReducer;
