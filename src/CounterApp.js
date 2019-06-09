/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity onPress={() => this.props._decreaseCounter()}>
            <Text>Decrease</Text>
          </TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props._increaseCounter()}>
            <Text>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProp(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    _decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
