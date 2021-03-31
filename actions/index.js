export const fetchCity = (cityData) => {
  return {
    type: "GET_CITY",
    payload: { cities: cityData },
  };
};
export const fetchCityError = (error) => {
  return {
    type: "GET_CITY_ERROR",
    payload: { error: error.error },
  };
};

export const fetchCityWeatherInfo = (cityWeatherInfo) => {
  return {
    type: "GET_CITY_WEATHER",
    payload: {
      isDayTime: cityWeatherInfo.IsDayTime,
      localObservationDateTime: cityWeatherInfo.LocalObservationDateTime,
      temperature: cityWeatherInfo.Temperature,
      weatherIcon: cityWeatherInfo.WeatherIcon,
      weatherText: cityWeatherInfo.WeatherText,
    },
  };
};

export const setCity = (cityName) => {
  return {
    type: "SET_CITY",
    payload: {
      cityName,
    },
  };
};
