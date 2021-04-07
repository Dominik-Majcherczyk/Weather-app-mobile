import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TabView, SceneMap } from "react-native-tab-view";
import Weather from "./Weather";
import Forecast from "./Forecast";
import CityInfo from "./CityInfo";

const FirstRoute = () => <Weather />;

const SecondRoute = () => <Forecast />;

const ThirdRoute = () => <CityInfo />;

const LazyPlaceholder = ({ route }) => (
  <View style={styles.loading}>
    <ActivityIndicator animating={true} color={Colors.red800} />
  </View>
);
class InfoPanel extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Weather" },
      { key: "second", title: "Next days" },
      { key: "third", title: "Location info" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  render() {
    return (
      <TabView
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    );
  }
}

export default InfoPanel;
const styles = StyleSheet.create({
  container: {},
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
