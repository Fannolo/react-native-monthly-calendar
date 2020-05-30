import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
//import { DimensionsUtils } from "../../../utils";
//import { H9 } from "../typhography/headlines";
import moment from "moment";
//import CustomIcon from "../../Icons/CustomIcon";

export class CalendarHeader extends Component {
  state = {
    open: false,
  };

  close() {
    this.setState({ open: false });
  }

  render() {
    const { container } = styles;
    const {
      backgroundColor,
      selectedMonth,
      selectedYear,
      textColor,
      onOpenCalendar,
      onCloseCalendar,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ open: !this.state.open }, () => onOpenCalendar());
        }}
        disabled={this.state.open}
        style={[
          container,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Text bold color={textColor}>{`${moment(selectedMonth, "MM")
          .format("MMMM")
          .toUpperCase()} ${selectedYear}
      `}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ open: !this.state.open }, () => {
              this.state.open ? onOpenCalendar() : onCloseCalendar();
            });
          }}
          style={[{ backgroundColor: backgroundColor }]}
        >
          {/* <CustomIcon
            color={textColor}
            name={this.state.open ? "delete_search" : "calendar"}
            size={DimensionsUtils.getIconSize(24)}
          /> */}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
