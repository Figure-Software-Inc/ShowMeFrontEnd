import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Watching25 = () => {
  return (
    <View style={styles.watching25}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.watching25Child, styles.watching25Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.watching25Item, styles.watching25Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.watching25Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={styles.usernameFounderContainer}>
        <Text style={styles.username}>{`Username • `}</Text>
        <Text style={styles.founder}>Founder</Text>
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.watching25Child1, styles.rectangleViewLayout]} />
      <Text style={[styles.all, styles.allTypo]}>All</Text>
      <Text style={[styles.completed, styles.allTypo]}>Completed</Text>
      <View style={styles.watching25Child2} />
      <View style={[styles.watching25Child3, styles.watching25ChildBg]} />
      <View style={[styles.watching25Child4, styles.watching25ChildBg]} />
      <View style={[styles.watching25Child5, styles.vectorIconPosition]} />
      <View style={[styles.searchWrapper, styles.searchWrapperPosition]}>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search1.png")}
        />
      </View>
      <Image
        style={[styles.bookmarksimpleIcon, styles.searchWrapperPosition]}
        resizeMode="cover"
        source={require("../assets/bookmarksimple.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  watching25Layout: {
    height: 25,
    width: 25,
    top: 94,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  allTypo: {
    textAlign: "center",
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  watching25ChildBg: {
    backgroundColor: Color.whitesmoke,
    position: "absolute",
  },
  searchWrapperPosition: {
    top: 782,
    position: "absolute",
  },
  vectorIcon: {
    top: 644,
    width: 143,
    height: 153,
  },
  vectorIcon1: {
    height: "2.01%",
    width: "5.13%",
    top: "21.56%",
    right: "-38.21%",
    bottom: "76.42%",
    left: "133.08%",
  },
  watching25Child: {
    left: 353,
  },
  watching25Item: {
    left: 378,
  },
  watching25Inner: {
    top: 97,
    left: 137,
    width: 102,
    height: 102,
    position: "absolute",
  },
  username: {
    fontWeight: "700",
    fontFamily: FontFamily.spartanBold,
  },
  founder: {
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
  },
  usernameFounderContainer: {
    top: 53,
    left: 23,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    width: 299,
    color: Color.black,
    position: "absolute",
  },
  rectangleView: {
    top: 226,
    left: 34,
    backgroundColor: Color.gainsboro,
    width: 322,
    height: 53,
  },
  watching25Child1: {
    top: 231,
    left: 40,
    backgroundColor: Color.white,
    width: 137,
    height: 44,
  },
  all: {
    top: 244,
    left: 80,
    width: 56,
    color: Color.black,
  },
  completed: {
    top: 243,
    left: 157,
    color: Color.gray,
    width: 185,
  },
  watching25Child2: {
    top: 532,
    left: 37,
    backgroundColor: Color.lightgray_200,
    width: 328,
    height: 95,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  watching25Child3: {
    top: 544,
    left: 51,
    borderRadius: Border.br_3xs,
    width: 71,
    height: 71,
  },
  watching25Child4: {
    top: 659,
    left: 96,
    width: 171,
    borderRadius: Border.br_xl,
    height: 153,
  },
  unionIcon: {
    width: 175,
    height: 40,
  },
  watching25Child5: {
    top: 769,
    backgroundColor: Color.teal,
    width: 390,
    height: 75,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  searchWrapper: {
    left: 173,
    flexDirection: "row",
  },
  bookmarksimpleIcon: {
    left: 271,
    width: 38,
    height: 38,
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "3.91%",
    width: "8.46%",
    top: "92.89%",
    right: "70.51%",
    bottom: "3.2%",
    left: "21.03%",
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

export default Watching25;
