import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import CalendarMonth from "./CalendarMonth";
import moment from "moment";
import localization from "moment/locale/it";
//import { DimensionsUtils } from "../../../utils";

export default class CalendarBodyMonths extends Component {
  render() {
    return (
      <FlatList
        contentContainerStyle={styles.bodyContainer}
        data={moment.monthsShort().map((item) => item.toUpperCase())}
        renderItem={this._renderItem.bind(this)}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  _renderItem = ({ item, index }) => {
    const { months, selectedMonth, selectedYear, currentYear } = this.props;
    let currentMonth = moment()
        .month(item)
        .format("MM");
    if (
      months.item.months.includes(currentMonth)
    ) {

      return (
        <CalendarMonth
          onPress={() => this.props.onPress(currentMonth, currentYear)}
          active={
            currentMonth === selectedMonth && currentYear === selectedYear
          }
          enabled={true}
          text={item}
        />
      );
    } else {
      return <CalendarMonth enabled={false} text={item} />;
    }
  };
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
  },
});
