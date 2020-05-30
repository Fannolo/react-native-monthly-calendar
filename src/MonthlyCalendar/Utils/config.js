import { Dimensions } from "react-native";

// Method that returns true if Screen Width is less than 375.
export const isToDownscale = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  return screenWidth < 375 ? true : false;
};

// Method that returns true if Screen Width is less than 375.
export const isToUpscale = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  return screenWidth > 400 ? true : false;
};
