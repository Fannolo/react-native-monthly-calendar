import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { DimensionsUtils } from "../../../utils";
import colors from "../../../utils/Colors";
import { H9 } from "../typhography/headlines";
import moment from "moment";
import localization from "moment/locale/it";
import CustomIcon from "../../Icons/CustomIcon";

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
        <H9
          bold
          color={textColor}
          text={`${moment(selectedMonth, "MM")
            .format("MMMM")
            .toUpperCase()} ${selectedYear}
          `}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ open: !this.state.open }, () => {
              this.state.open ? onOpenCalendar() : onCloseCalendar();
            });
          }}
          style={[{ backgroundColor: backgroundColor }]}
        >
          <CustomIcon
            color={textColor}
            name={this.state.open ? "delete_search" : "calendar"}
            size={DimensionsUtils.getIconSize(24)}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DimensionsUtils.getDP(56),
    width: "100%",
    padding: DimensionsUtils.getDP(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
