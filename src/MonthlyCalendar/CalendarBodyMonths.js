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
      textColor,
      selectedDateTextColor,
      selectedDateBackgroundColor,
      activeDateBackgroundColor,
      activeDateTextColor,
      inactiveDateTextColor,
      inactiveDateBackgroundColor,
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
          selectedDateTextColor={selectedDateTextColor || textColor}
          selectedDateBackgroundColor={selectedDateBackgroundColor}
          activeDateBackgroundColor={activeDateBackgroundColor}
          activeDateTextColor={activeDateTextColor || textColor}
          inactiveDateTextColor={inactiveDateTextColor || textColor}
          inactiveDateBackgroundColor={inactiveDateBackgroundColor}
        />
      );
    } else {
      return (
        <CalendarMonth
          enabled={false}
          text={item}
          selectedDateTextColor={selectedDateTextColor || textColor}
          selectedDateBackgroundColor={selectedDateBackgroundColor}
          activeDateBackgroundColor={activeDateBackgroundColor}
          activeDateTextColor={activeDateTextColor || textColor}
          inactiveDateTextColor={inactiveDateTextColor || textColor}
          inactiveDateBackgroundColor={inactiveDateBackgroundColor}
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

CalendarBodyMonths.defaultProps = {
  selectedDateBackgroundColor: "#fff",
  activeDateBackgroundColor: "#fff",
  inactiveDateBackgroundColor: "#fff",
};
