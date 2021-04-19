# React Native Weather-App

# external specifications
A android weather app aplication

## Available Scripts

In the project directory, you can run:

- for android studio emulator `npm run android`

- expo web or mobile `expo start`

#### Features
- manual location search, or using geolocation
- current weather and temperature display
- 5-day forecast
- 12-hour forecast
- managing favourite locations

## Demo

###### Searching

<img src="https://media2.giphy.com/media/4cO8yEkYmeGqBbTa8h/giphy.gif" width="200">

###### Geolocalization

<img src="https://media3.giphy.com/media/7n8kojBRLjz2XViuge/giphy.gif" width="200">

###### Favourites

<img src="https://media4.giphy.com/media/Ihmq2DddYZOAc8EUx7/giphy.gif" width="200">

# internal specification

## used libraries

```js
 "dependencies": {
    "@react-native-async-storage/async-storage": "^1.15.1",
    "@react-native-community/geolocation": "^2.0.2",
    "@react-navigation/material-bottom-tabs": "^6.0.0-next.1",
    "expo": "~40.0.0",
    "expo-splash-screen": "~0.8.0",
    "expo-status-bar": "~1.0.3",
    "expo-updates": "~0.4.0",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "~0.63.4",
    "react-native-axios": "^0.17.1",
    "react-native-gesture-handler": "~1.8.0",
    "react-native-pager-view": "^5.1.2",
    "react-native-paper": "^4.7.2",
    "react-native-reanimated": "~1.13.0",
    "react-native-screens": "~2.15.0",
    "react-native-tab-view": "^3.0.0",
    "react-native-unimodules": "~0.12.0",
    "react-native-web": "~0.13.12",
    "react-redux": "^7.2.2",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
  };
  ```

## application structure

### Main components
The application consists of three main views - components such as:

- Searching,
- Favourites,
- InfoPanel:
  - WeatherDashboard,
  - TodayForecast,
  - ThisWeekForecast

Info panel has three sub-views which are updated with every new location set.

### State management
State management for two or more views is handled by <a href="https://react-redux.js.org/introduction/getting-started">Redux</a> and <a href="https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic">Redux-thunk</a> for async logic, whose logic is located in the `/reducers` folder, and actions in `/actions` folder

Root reducer consists of three reducers

```js
const rootReducer = combineReducers({
  citiesData: cityReducer,
  cityWeatherInfo: cityWeatherInfoReducer,
  cityName: cityNameReducer,
});
```

- citiesData stores and updates cities shown during search,
- cityName stores and updates city name and key (needed to gather data for a given location - weather and forecasts) when you have selected a new location,
- cityWeatherInfo stores and updates weather data for weatherDashboard component.

### Layout

For the appearance of the application were used the <a href="https://callstack.github.io/react-native-paper/getting-started.html">React-native-paper<a/> library with <a href="https://github.com/satya164/react-native-tab-view">React-native-tab-view</a> and manually created styles with css. Css was implemented in the form of javascript objects, because only this form of styling is allowed in react-native.
Sample of css styling:
  
```js
  import { View, StyleSheet } from "react-native";
  {...}
  <View style={styles.container}>
  {...}
  const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#6d93cc",
  },
  }
```

### In-depth look into used components

#### `App.js`

The App component contains the <a href="https://callstack.github.io/react-native-paper/bottom-navigation.html">BottomNavigation</a> element from the React-native-paper library.  This element has its own routing that accepts components that are referenced in the bottom navigation of the application.

```js
  const SearchingRoute = () => <Searching setIndex={setIndex} />;
  const FavouritesRoute = () => <Favourites setIndex={setIndex} />;
  const InfoPanelRoute = () => <InfoPanel />;
```
In this case, the Searching and Favourites components have additional `setIndex` prop, because in these two components you can select the location for which you want to display the data in InfoPanel (by using `fetchUserLocationInfo(lattitude, longtitude)` function) which have index of 0. `setIndex` in this case it acts as a redirect which sets the index to 0.

```js
  const fetchUserLocationInfo = async (lat, lon) => {
    await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${lat}%2C${lon}`
    )
      .then((res) => res.json())
      .then((city) => {
        dispatch(findCityWeatherInfo(city.Key));
        dispatch(
          setCity({
            cityName: city.LocalizedName,
            cityKey: city.Key,
          })
        );
      })
      .then(setIndex(0))
      .catch((error) => console.log(error));
  };
```

It also has an element <a href="https://callstack.github.io/react-native-paper/appbar.html">appbar</a> that as an application header.

#### `Searching.js`
  
The location finder component, has an "Input" for entering a city name. The request is sent each time the value changes. Cities are displayed using the AccuWeather <a href="https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete">Autocomplete search</a> API, so you don't have to type in the whole name to see the names of cities you might be looking for. 
It also has a geolocation function, by pressing a button you can instantly redirect into weather display for current location.

```js
import Geolocation from "@react-native-community/geolocation";
{...}
  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        fetchUserLocationInfo(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
```

#### `Favourites.js`

Component displaying all cities saved in <a href="https://react-native-async-storage.github.io/async-storage/docs/install/">async storage</a>. The component retrieves all cities keys from storage and stores them in its local state `keys`. Values are read for all keys and written to the state `favs`.

```js
  const getValuesForKeys = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log(e);
    }
    setFavs(values);
  };
```
Each favorite location has options to delete from storage, and redirect to the InfoPanel component to gather and display the data again.

#### `InfoPanel.js`

InfoPanel contains a <a href="https://github.com/satya164/react-native-tab-view">TabView<a/> element that has its own built-in routing.
 
 ```js
 const FirstRoute = () => <Weather />;

 const SecondRoute = () => <ThisWeekForecast />;

 const ThirdRoute = () => <TodayForecast />;
 ```
`Lazy loading`
Callback which returns a custom React Element to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The lazy prop also needs to be enabled.

```js
const LazyPlaceholder = ({ route }) => (
  <View style={styles.loading}>
    <ActivityIndicator animating={true} color={Colors.red800} />
  </View>
);
```
#### `Weather.js`

Component that retrieves and displays data from the global state.cityWeatherInfo and the city name and key from state.cityName.

###### Saving favourite
It also has a button that can add the currently set city in state.cityName to the async storge as a favorite.

```js
  const addFavourite = () => {
    storeData(cityName);
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(`${cityName.cityName}`, JSON.stringify(value));
    } catch (e) {
      console.log("error while saving fav zone");
    }
  };
```
#### `TodayForecast.js` & `ThisWeekForecast`

both components are very similar. They retrieve the current city name and key from the global application state and then send requests to the AccuWeather api to retrieve the forecast object (<a href="https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/hourly/12hour/%7BlocationKey%7D">12-hour</a> and <a href="https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D">5-day</a>). 

```js
  const fetchForecast = async (cityKey) => {
    await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
                                             OR
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch(() => console.log("error in fetching forecast"));
  };
```
each table element from the forecast object is mapped to display information.

```js
 forecast.DailyForecasts.map((day) => {...})
               OR
 forecast.map((hour) => {...})
```
