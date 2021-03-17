export const fetchCity = (cityData) => {
  return {
    type: "GET_CITY",
    payload: { cityName: cityData.cityName, cityId: cityData.cityId },
  };
};
export const fetchCityError = (error) => {
  return {
    type: "GET_CITY_ERROR",
    payload: { error: error.error },
  };
};
