import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DimensionsUtils } from "./DimensionUtils";

class H9 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headline } = styles;
    return (
      <View>
        <Text
          style={[
            headline,
            this.props.color ? { color: this.props.color } : "",
            this.props.padding ? { padding: this.props.padding } : "",
            this.props.paddingLeft
              ? { paddingLeft: this.props.paddingLeft }
              : "",
            this.props.paddingRight
              ? { paddingLeft: this.props.paddingRight }
              : "",
            this.props.paddingTop ? { paddingTop: this.props.paddingTop } : "",
            // this.props.bold ? { fontFamily: "Everett-Medium" } : "",
            // this.props.light ? { fontFamily: "Everett-Light" } : "",
            this.props.paddingBottom
              ? { paddingBottom: this.props.paddingBottom }
              : "",
          ]}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: DimensionsUtils.getFontSize(18),
    //fontFamily: "Everett-Regular",
    height: DimensionsUtils.getFontSize(18),
  },
});

export { H9 };
