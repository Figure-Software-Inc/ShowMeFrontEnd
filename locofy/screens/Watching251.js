import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Watching2511 = () => {
  return (
    <View style={styles.watching25}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <View style={[styles.watching25Child, styles.watching25Layout]} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.watching25Item, styles.watching25Position]} />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union3.png")}
      />
      <View style={styles.watching25Inner} />
      <View style={styles.rectangleView} />
      <Text style={styles.welcomeBackChristine}>Welcome Back Christine!</Text>
      <Text style={[styles.jumpBackIn, styles.jumpBackInTypo]}>
        Jump Back In
      </Text>
      <Text style={[styles.viewHistory, styles.cxClr]}>View History</Text>
      <Text style={[styles.reccommendedForYou, styles.jumpBackInTypo]}>
        Reccommended For You
      </Text>
      <View style={[styles.watching25Child1, styles.watching25Position]} />
      <View style={[styles.searchWrapper, styles.searchWrapperPosition]}>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={styles.watching25Child2} />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={[styles.bookmarksimpleIcon, styles.searchWrapperPosition]}
        resizeMode="cover"
        source={require("../assets/bookmarksimple.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Text style={[styles.cx, styles.cxClr]}>CX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  watching25Layout: {
    height: 175,
    backgroundColor: Color.whitesmoke,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  watching25Position: {
    left: 33,
    width: 326,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  jumpBackInTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  cxClr: {
    color: Color.gray,
    textAlign: "left",
    position: "absolute",
  },
  searchWrapperPosition: {
    top: 782,
    position: "absolute",
  },
  iconLayout: {
    width: 50,
    position: "absolute",
  },
  vectorIcon: {
    top: 217,
    left: 200,
    width: 176,
    height: 221,
    position: "absolute",
  },
  vectorIcon1: {
    top: 644,
    width: 143,
    height: 153,
    left: 0,
    position: "absolute",
  },
  watching25Child: {
    top: 600,
    left: 30,
    width: 326,
    borderRadius: Border.br_xl,
    height: 175,
    position: "absolute",
  },
  vectorIcon2: {
    top: "73.22%",
    right: "13.59%",
    bottom: "24.76%",
    left: "81.28%",
    width: "5.13%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  unionIcon: {
    height: 46,
    width: 326,
  },
  watching25Item: {
    top: 221,
    height: 175,
    backgroundColor: Color.whitesmoke,
  },
  vectorIcon3: {
    top: "28.32%",
    right: "12.82%",
    bottom: "69.67%",
    left: "82.05%",
    width: "5.13%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  watching25Inner: {
    top: 111,
    backgroundColor: Color.khaki,
    width: 295,
    height: 18,
    left: 14,
    position: "absolute",
  },
  rectangleView: {
    top: 769,
    backgroundColor: Color.teal,
    width: 390,
    height: 75,
    left: 0,
    position: "absolute",
  },
  welcomeBackChristine: {
    top: 106,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    left: 14,
    position: "absolute",
  },
  jumpBackIn: {
    top: 182,
    left: 14,
  },
  viewHistory: {
    left: 136,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.spartanMedium,
    top: 182,
  },
  reccommendedForYou: {
    top: 437,
    left: 17,
  },
  watching25Child1: {
    top: 476,
    backgroundColor: Color.lightgray_200,
    height: 95,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  searchWrapper: {
    left: 173,
    flexDirection: "row",
  },
  vectorIcon4: {
    top: "21.56%",
    right: "-38.21%",
    bottom: "76.42%",
    left: "133.08%",
    width: "5.13%",
    height: "2.01%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  watching25Child2: {
    top: 488,
    left: 47,
    borderRadius: Border.br_3xs,
    width: 71,
    height: 71,
    backgroundColor: Color.whitesmoke,
    position: "absolute",
  },
  ellipseIcon: {
    top: 33,
    left: 309,
    height: 50,
  },
  bookmarksimpleIcon: {
    left: 271,
    width: 38,
    height: 38,
    overflow: "hidden",
  },
  vectorIcon5: {
    height: "3.91%",
    width: "8.46%",
    top: "92.89%",
    right: "70.51%",
    bottom: "3.2%",
    left: "21.03%",
  },
  groupIcon: {
    top: 47,
    height: 25,
    left: 0,
  },
  cx: {
    top: 52,
    left: 320,
    fontSize: 18,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    color: Color.gray,
  },
  watching25: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Watching2511;
