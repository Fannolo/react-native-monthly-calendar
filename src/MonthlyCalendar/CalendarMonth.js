import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { DimensionsUtils, Body } from "./Utils";

export default class CalendarMonth extends Component {
  render() {
    const { container, text } = styles;
    return (
      <TouchableOpacity
        style={[
          { backgroundColor: this.props.active ? "#000" : null },
          container,
        ]}
        disabled={!this.props.enabled}
        onPress={this.props.onPress}
      >
        <Body
          color={
            this.props.active ? "#fff" : this.props.enabled ? "#000" : "#000"
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
