import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { DimensionsUtils } from "./DimensionUtils";

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, defaultFontSize } = styles;
    return (
      <View>
        <Text
          style={[
            body,
            this.props.lineHeight ? { lineHeight: this.props.lineHeight } : "",
            // this.props.bold ? { fontFamily: "Everett-Medium" } : "",
            // this.props.light ? { fontFamily: "Everett-Light" } : "",
            this.props.textAlign ? { textAlign: this.props.textAlign } : "",
            this.props.textDecorationLine
              ? { textDecorationLine: this.props.textDecorationLine }
              : "",
            this.props.isFixed ? defaultFontSize : "",
            this.props.color ? { color: this.props.color } : { color: "#000" },
            this.props.fontSize
              ? { fontSize: this.props.fontSize }
              : DimensionsUtils.getFontSize(16),
            this.props.paddingLeft
              ? { paddingLeft: this.props.paddingLeft }
              : "",
            this.props.textAlign ? { textAlign: this.props.textAlign } : "",
            this.props.paddingRight
              ? { paddingRight: this.props.paddingRight }
              : "",
            this.props.paddingTop ? { paddingTop: this.props.paddingTop } : "",
            this.props.paddingBottom
              ? { paddingBottom: this.props.paddingBottom }
              : "",
            this.props.backgroundColor
              ? {
                  backgroundColor: this.props.backgroundColor,
                  borderRadius: 2,
                }
              : "",
            this.props.style,
          ]}
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            this.props.width && this.props.width(width);
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: DimensionsUtils.getFontSize(16),
    //fontFamily: "Everett-Regular",
    color: "#6F7C87",
  },
  defaultFontSize: {
    fontSize: DimensionsUtils.getFontSize(16), //DO NOT CHANGE!
  },
});

Body.propTypes = {
  text: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  textAlign: PropTypes.string,
  textDecorationLine: PropTypes.string,
  isFixed: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
};

export { Body };
