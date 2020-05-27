import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { CalendarBodyYear } from "./CalendarBodyYear";
import CalendarBodyMonths from "./CalendarBodyMonths";
import { DimensionsUtils } from "../../../utils";
import moment from "moment";
import Carousel from "react-native-snap-carousel";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class CalendarBody extends Component {
  state = {
    currentYear: this.props.selectedYear,
  };

  render() {
    const { carouselContainer } = styles;
    const { textColor, backgroundColor } = this.props;
    const calendar = this._getAllDates();
    return (
      <View style={[{ width: "100%", backgroundColor, marginTop: -1 }]}>
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
        />
        <View style={carouselContainer}>
          <Carousel
            firstItem={calendar
              .map((item) => item.year)
              .indexOf(this.props.selectedYear)}
            onSnapToItem={(index) => {
              this.setState({ currentYear: calendar[index].year });
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
      allDatesFinal.push({ year: key, months: value });
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

CalendarBody.defaultProps = {
  minYear: 2020,
  maxYear: 2020,
};
