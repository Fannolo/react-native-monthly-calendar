import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import CalendarMonth from "./CalendarMonth";
import moment from "moment/min/moment-with-locales";

export default class CalendarBodyMonths extends Component {
  render() {
    moment.locale(this.props.locale);
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
    const {
      months,
      selectedMonth,
      selectedYear,
      currentYear,
      selectedDateTextColor,
      selectedDateBackgroundColor,
      activeDateBackgroundColor,
      activeDateTextColor,
      inactiveDateTextColor,
      inactiveDateBackgroundColor,
      locale,
    } = this.props;

    let currentMonth = moment().month(item).format("MM");
    if (months.item.months.includes(currentMonth)) {
      return (
        <CalendarMonth
          onPress={() => this.props.onPress(currentMonth, currentYear)}
          active={
            currentMonth === selectedMonth && currentYear === selectedYear
          }
          enabled={true}
          text={item}
          selectedDateTextColor={selectedDateTextColor || "#fff"}
          selectedDateBackgroundColor={selectedDateBackgroundColor || "#000"}
          activeDateBackgroundColor={activeDateBackgroundColor || "#fff"}
          activeDateTextColor={activeDateTextColor || "#000"}
          inactiveDateTextColor={inactiveDateTextColor || "#000"}
          inactiveDateBackgroundColor={inactiveDateBackgroundColor || "#fff"}
        />
      );
    } else {
      return (
        <CalendarMonth
          enabled={false}
          text={item}
          selectedDateTextColor={selectedDateTextColor || "#fff"}
          selectedDateBackgroundColor={selectedDateBackgroundColor || "#000"}
          activeDateBackgroundColor={activeDateBackgroundColor || "#fff"}
          activeDateTextColor={activeDateTextColor || "#000"}
          inactiveDateTextColor={inactiveDateTextColor || "#000"}
          inactiveDateBackgroundColor={inactiveDateBackgroundColor || "#fff"}
        />
      );
    }
  };
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
  },
});
