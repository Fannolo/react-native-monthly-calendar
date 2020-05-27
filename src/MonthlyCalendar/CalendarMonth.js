import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DimensionsUtils } from "../../../utils";
import { Body_1 } from "../typhography/bodies";
import colors from "../../../utils/Colors";

export default class CalendarMonth extends Component {
  render() {
    const { container, text } = styles;
    return (
      <TouchableOpacity
        style={[
          { backgroundColor: this.props.active ? colors.white : null },
          container,
        ]}
        disabled={!this.props.enabled}
        onPress={this.props.onPress}
      >
        <Body_1
          color={
            this.props.active
              ? colors.purple
              : this.props.enabled
              ? colors.white
              : colors.whiteOpacity
          }
          style={text}
          bold={this.props.active || this.props.enabled ? true : false}
          light={!this.props.enabled && true}
          text={this.props.text}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: DimensionsUtils.getDP(10),
    marginVertical: DimensionsUtils.getDP(8),
    borderRadius: 90,
  },
  text: {
    paddingHorizontal: DimensionsUtils.getDP(16),
    paddingVertical: DimensionsUtils.getDP(6),
  },
});

CalendarMonth.defaultProps = {
  enabled: true,
  active: false,
};
