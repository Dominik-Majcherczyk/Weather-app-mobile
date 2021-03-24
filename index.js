import { registerRootComponent } from "expo";
import * as React from "react";
import { Provider as PaperProvider, DarkTheme } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
