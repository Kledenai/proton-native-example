import React, { Component } from "react";
import { Window, App, Text } from "proton-native";

export default class Example extends Component {
  render() {
    return (
      <App>
        <Window style={{ width: 600, height: 400, backgroundColor: "#2b2b2b" }}>
          <View>
            <Text>Hi, I'm one text</Text>
          </View>
        </Window>
      </App>
    );
  }
}
