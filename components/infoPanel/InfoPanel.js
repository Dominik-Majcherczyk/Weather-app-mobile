import * as React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Constants } from "expo";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);
class InfoPanel extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
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
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
