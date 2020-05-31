import React, { Component } from "react";
import { View } from "react-native";
import { CalendarHeader } from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
// import moment from "moment";
import moment from "moment/min/moment-with-locales";

export default class Calendar extends Component {
  state = {
    showCalendar: false,
    selectedMonth: moment(this.props.selectedDate, "YYYY-MM").format("MM"),
    selectedYear: moment(this.props.selectedDate, "YYYY-MM").format("YYYY"),
  };

  close() {
    this.setState({ showCalendar: false });
    this.calendarHeader.close();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedDate !== this.props.selectedDate) {
      this.setState({
        selectedMonth: moment(this.props.selectedDate, "YYYY-MM").format("MM"),
        selectedYear: moment(this.props.selectedDate, "YYYY-MM").format("YYYY"),
      });
    }
  }

  render() {
    const {
      textColor,
      backgroundColor,
      onDateChange,
      locale,
      closeIconComponent,
      openIconComponent,
      prevComponent,
      nextComponent,
      activeDateTextColor,
      activeDateBackgroundColor,
      selectedDateTextColor,
      selectedDateBackgroundColor,
      inactiveDateTextColor,
      inactiveDateBackgroundColor,
    } = this.props;

    moment.locale(locale);

    return (
      <>
        <CalendarHeader
          ref={(ref) => (this.calendarHeader = ref)}
          selectedMonth={this.state.selectedMonth}
          selectedYear={this.state.selectedYear}
          textColor={textColor}
          backgroundColor={backgroundColor}
          onOpenCalendar={() => {
            this.setState({ showCalendar: true });
          }}
          onCloseCalendar={() => {
            this.setState({ showCalendar: false });
          }}
          closeIconComponent={closeIconComponent || <View />}
          openIconComponent={openIconComponent || <View />}
          locale={locale}
        />
        {this.state.showCalendar && (
          <CalendarBody
            onDateChange={(month, year) => {
              onDateChange(month, year);
              this.setState({ selectedMonth: month, selectedYear: year });
            }}
            selectedMonth={this.state.selectedMonth}
            selectedYear={this.state.selectedYear}
            backgroundColor={backgroundColor}
            textColor={textColor}
            selectedDateTextColor={selectedDateTextColor}
            selectedDateBackgroundColor={selectedDateBackgroundColor}
            activeDateBackgroundColor={activeDateBackgroundColor}
            activeDateTextColor={activeDateTextColor}
            inactiveDateTextColor={inactiveDateTextColor}
            inactiveDateBackgroundColor={inactiveDateBackgroundColor}
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            prevComponent={prevComponent}
            nextComponent={nextComponent}
            locale={locale}
          />
        )}
      </>
    );
  }
}

Calendar.defaultProps = {
  maxDate: moment().format("YYYY-MM"),
  minDate: moment().format("YYYY-MM"),
  backgroundColor: "#fff",
  prevComponent: <View />,
  nextComponent: <View />,
  locale: "en",
};
