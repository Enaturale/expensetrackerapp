import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS ={
    //base colors
    primary: '#194868',
    secondary: "#FF615F",

    //other colors
    black: "#000000",
    white:"#FFFFFF",
    lightGray: "#C0C0C0",
    deepGray: "#808080",
    red: "#FF0000",
    peach: "#FFE5B4",
    purple: "#800080",
    green:"#00FF00",
    indigo: "#4B0082"
};

export const SIZES ={
    //global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //app dimensions
    width,
    height
};

export const FONTS={
    largeTitle:{fontFamily: "", fontSize: SIZES.largeTitle, lineHeight: 50},
    h1: {fontFamily: "", fontSize: SIZES.h1, lineHeight:36},
    h2: {fontFamily:"", fontSize: SIZES.h2, lineHeight:30},
    h3: {fontFamily:"", fontSize: SIZES.h3, lineHeight:22},
    h4: {fontFamily:"", fontSize: SIZES.h4, lineHeight:22},
    body1: {fontFamily:"", fontSize: SIZES.body1, lineHeight:36},
    body2: {fontFamily:"", fontSize: SIZES.body2, lineHeight:30},
    body3: {fontFamily:"", fontSize: SIZES.body3, lineHeight:22},
    body4: {fontFamily:"", fontSize: SIZES.body4, lineHeight:22},
  

};

const appTheme ={COLORS, SIZES, FONTS}

export default appTheme;