import { Platform } from "react-native";

import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "./config.json";

// Per android, quando si aggiornano le icone/i font bisogna andare a sostituire manualmente i file ttf
// nella cartella android/app/src/main/assets/fonts con quelli aggiornati in src/assets/fonts/Everett e src/assets/fonts/Icons
const param = Platform.OS === "ios" ? null : "nen-icons";
export default createIconSetFromFontello(fontelloConfig, param);
