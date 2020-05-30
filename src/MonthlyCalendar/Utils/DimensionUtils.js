import { create, PREDEF_RES } from "react-native-pixel-perfect";
import { isToDownscale, isToUpscale } from "./config";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export class DimensionsUtils {
  static getDP(pixel) {
    if (isToDownscale() || isToUpscale()) {
      return perfectSize(pixel);
    } else {
      return pixel;
    }
  }

  static getFontSize(pixel) {
    if (isToDownscale()) {
      switch (pixel) {
        case 12:
          return 12;
        case 16:
          return 14;
        case 20:
          return 18;
        case 22:
          return 18;
        case 30:
          return 24;
        case 40:
          return 30;
        case 50:
          return 40;
        case 60:
          return 50;
        case 70:
          return 60;
        case 80:
          return 70;
        case 90:
          return 80;
        case 100:
          return 90;
        case 110:
          return 100;
        case 120:
          return 110;
        default:
          return perfectSize(pixel);
      }
    } else if (isToUpscale()) {
      return perfectSize(pixel);
    } else {
      return pixel;
    }
  }

  static getIconSize(pixel) {
    if (isToDownscale()) {
      return pixel - 4;
    } else if (isToUpscale()) {
      return perfectSize(pixel);
    } else {
      return pixel;
    }
  }
}
