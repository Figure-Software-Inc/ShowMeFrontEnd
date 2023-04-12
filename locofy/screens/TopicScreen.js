import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TopicScreen1 = () => {
  return (
    <View style={styles.topicScreen}>
      <View style={[styles.topicScreenChild, styles.topicChildLayout1]} />
      <View style={[styles.topicScreenItem, styles.topicLayout]} />
      <View style={styles.topicScreenInner} />
      <Text style={[styles.fundraising, styles.sortByTypo]}>Fundraising</Text>
      <Text style={[styles.sortBy, styles.sortByTypo]}>Sort by</Text>
      <View style={styles.playcircleParent}>
        <Image
          style={styles.playcircleIcon}
          resizeMode="cover"
          source={require("../assets/playcircle.png")}
        />
        <Image
          style={styles.magnifyingglassIcon}
          resizeMode="cover"
          source={require("../assets/magnifyingglass.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <View style={[styles.topicScreenChild1, styles.topicChildLayout]} />
      <View style={[styles.topicScreenChild2, styles.topicChildLayout]} />
      <View style={[styles.topicScreenChild3, styles.topicChildLayout1]} />
      <View style={[styles.topicScreenChild4, styles.topicLayout]} />
      <Image
        style={styles.bookmarksimpleIcon}
        resizeMode="cover"
        source={require("../assets/bookmarksimple.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topicChildLayout1: {
    height: 95,
    backgroundColor: Color.lightgray_200,
    borderRadius: Border.br_xl,
    width: 328,
    position: "absolute",
  },
  topicLayout: {
    height: 71,
    width: 71,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke,
    position: "absolute",
  },
  sortByTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  topicChildLayout: {
    height: 153,
    top: 411,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  topicScreenChild: {
    top: 749,
    left: 38,
  },
  topicScreenItem: {
    top: 761,
    left: 52,
  },
  topicScreenInner: {
    top: 769,
    left: 0,
    backgroundColor: Color.teal,
    width: 390,
    height: 75,
    position: "absolute",
  },
  fundraising: {
    top: 54,
    fontSize: FontSize.size_6xl,
    left: 14,
  },
  sortBy: {
    top: 113,
    left: 13,
    fontSize: FontSize.size_base,
  },
  playcircleIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  magnifyingglassIcon: {
    width: 46,
    marginLeft: 46,
    height: 46,
    overflow: "hidden",
  },
  playcircleParent: {
    top: 783,
    left: 79,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleView: {
    top: 196,
    left: 28,
    height: 175,
    backgroundColor: Color.whitesmoke,
    width: 328,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  unionIcon: {
    height: 46,
    width: 328,
  },
  topicScreenChild1: {
    width: 171,
    left: 14,
  },
  unionIcon1: {
    width: 175,
    height: 40,
  },
  topicScreenChild2: {
    left: 205,
    width: 168,
  },
  unionIcon2: {
    width: 168,
    height: 40,
  },
  topicScreenChild3: {
    top: 619,
    left: 31,
  },
  topicScreenChild4: {
    top: 631,
    left: 45,
  },
  bookmarksimpleIcon: {
    top: 788,
    left: 261,
    width: 38,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  topicScreen: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TopicScreen1;
