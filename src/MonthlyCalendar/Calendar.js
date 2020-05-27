import React, { Component } from "react";
import { CalendarHeader } from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import moment from "moment";

export class Calendar extends Component {
  state = {
    showCalendar: false,
    selectedMonth: moment(this.props.selectedDate, "YYYY-MM").format("MM"),
    selectedYear: moment(this.props.selectedDate, "YYYY-MM").format("YYYY"),
  };

  close() {
    this.setState({ showCalendar: false });
    this.calendarHeader.close();
  }


  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
     if (prevProps.selectedDate!==this.props.selectedDate){
       this.setState({
         selectedMonth: moment(this.props.selectedDate, "YYYY-MM").format("MM"),
         selectedYear: moment(this.props.selectedDate, "YYYY-MM").format("YYYY")
       });
     }
  }

  render() {
    const { textColor, backgroundColor, onDateChange } = this.props;
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
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
          />
        )}
      </>
    );
  }
}

Calendar.defaultProps = {
  maxDate: moment().format("YYYY-MM"),
  minDate: moment().format("YYYY-MM"),
};
