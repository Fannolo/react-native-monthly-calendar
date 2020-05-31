import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { CalendarBodyYear } from "./CalendarBodyYear";
import CalendarBodyMonths from "./CalendarBodyMonths";
import moment from "moment/min/moment-with-locales";
import Carousel from "react-native-snap-carousel";
import { DimensionsUtils } from "./Utils";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class CalendarBody extends Component {
  state = {
    currentYear: this.props.selectedYear,
  };

  render() {
    const { carouselContainer } = styles;
    const {
      textColor,
      backgroundColor,
      prevComponent,
      nextComponent,
      locale,
    } = this.props;
    const calendar = this._getAllDates();
    return (
      <View
        style={[
          {
            width: "100%",
            backgroundColor,
            marginTop: -1,
          },
        ]}
      >
        <CalendarBodyYear
          calendar={calendar}
          currentYear={this.state.currentYear}
          onLeftPress={() => {
            this.carousel.snapToPrev();
          }}
          onRightPress={() => {
            this.carousel.snapToNext();
          }}
          textColor={textColor}
          backgroundColor={backgroundColor}
          prevComponent={prevComponent}
          nextComponent={nextComponent}
          locale={locale}
        />
        <View style={carouselContainer}>
          <Carousel
            firstItem={calendar
              .map((item) => item.year)
              .indexOf(this.props.selectedYear)}
            onSnapToItem={(index) => {
              this.setState({
                currentYear: calendar[index].year,
              });
            }}
            scrollEnabled={Platform.OS === "ios"}
            ref={(ref) => (this.carousel = ref)}
            layout={"default"}
            enableSnap={true}
            useScrollView={true}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            activeSlideAlignment={"center"}
            sliderWidth={SCREEN_WIDTH - DimensionsUtils.getDP(64)}
            itemWidth={SCREEN_WIDTH - DimensionsUtils.getDP(64)}
            data={calendar}
            renderItem={(item) => this._renderItem.bind(this)(item)}
          />
        </View>
      </View>
    );
  }

  _renderItem = (item) => {
    const {
      textColor,
      backgroundColor,
      selectedYear,
      selectedMonth,
      onDateChange,
      activeDateBackgroundColor,
      activeDateTextColor,
      selectedDateTextColor,
      selectedDateBackgroundColor,
      inactiveDateTextColor,
      inactiveDateBackgroundColor,
      locale,
    } = this.props;
    return (
      <CalendarBodyMonths
        currentYear={item.item.year}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        backgroundColor={backgroundColor}
        textColor={textColor}
        months={item}
        data={item}
        onPress={onDateChange}
        selectedDateTextColor={selectedDateTextColor}
        selectedDateBackgroundColor={selectedDateBackgroundColor}
        activeDateBackgroundColor={activeDateBackgroundColor}
        activeDateTextColor={activeDateTextColor}
        inactiveDateTextColor={inactiveDateTextColor}
        inactiveDateBackgroundColor={inactiveDateBackgroundColor}
        locale={locale}
      />
    );
  };

  _getAllDates = () => {
    const { minDate, maxDate } = this.props;
    let dateStart = moment(minDate);
    let dateEnd = moment(maxDate);
    let allDates = {};
    let allDatesFinal = [];

    while (
      dateEnd > dateStart ||
      dateStart.format("MM") === dateEnd.format("MM")
    ) {
      if (!allDates[dateStart.format("YYYY")]) {
        allDates[dateStart.format("YYYY")] = [dateStart.format("MM")];
      } else {
        allDates[dateStart.format("YYYY")].push(dateStart.format("MM"));
      }
      dateStart.add(1, "month");
    }
    for (const [key, value] of Object.entries(allDates)) {
      allDatesFinal.push({
        year: key,
        months: value,
      });
    }
    return allDatesFinal;
  };
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  carouselContainer: {
    alignItems: "center",
    paddingVertical: DimensionsUtils.getDP(11),
  },
});
