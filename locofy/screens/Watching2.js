import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Watching2 = () => {
  return (
    <View style={styles.watching2}>
      <View style={styles.watching2Child} />
      <Image
        style={[styles.watching2Item, styles.watching2Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.watching2Inner, styles.watching2Position]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.watching2Child1, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={styles.recommendedForYou}>Recommended For You</Text>
      <Text style={[styles.videos, styles.videosTypo]}>Videos</Text>
      <Text style={[styles.articles, styles.videosTypo]}>Articles</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <View style={[styles.watching2Child2, styles.watching2ChildLayout]} />
      <View style={[styles.watching2Child2, styles.watching2ChildLayout]} />
      <View style={[styles.watching2Child4, styles.watching2ChildLayout]} />
      <Image
        style={[styles.playButtonCircled, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/play-button-circled.png")}
      />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.personIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/person.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  watching2Position: {
    left: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 25,
    width: 25,
    top: 94,
    position: "absolute",
  },
  videosTypo: {
    fontSize: FontSize.size_base,
    left: 31,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleLayout: {
    height: 223,
    width: 257,
    top: 151,
    position: "absolute",
  },
  groupLayout: {
    height: 85,
    backgroundColor: Color.gray,
    width: 257,
    left: 0,
    position: "absolute",
  },
  watching2ChildLayout: {
    height: 95,
    top: 445,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
    width: 257,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    width: 45,
    top: 783,
    position: "absolute",
  },
  watching2Child: {
    top: 69,
    left: 37,
    backgroundColor: Color.khaki,
    width: 295,
    height: 18,
    position: "absolute",
  },
  watching2Item: {
    top: 713,
    width: 61,
    height: 61,
  },
  watching2Inner: {
    top: 774,
    backgroundColor: Color.teal,
    width: 390,
    height: 75,
  },
  ellipseIcon: {
    left: 353,
  },
  watching2Child1: {
    left: 378,
  },
  recommendedForYou: {
    top: 62,
    left: 29,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  videos: {
    top: 127,
  },
  articles: {
    top: 422,
  },
  groupChild: {
    top: 0,
    height: 219,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
    width: 257,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 138,
    borderRadius: Border.br_8xs,
    height: 85,
    backgroundColor: Color.gray,
  },
  groupInner: {
    top: 134,
  },
  rectangleParent: {
    left: 31,
  },
  rectangleGroup: {
    left: 308,
  },
  watching2Child2: {
    left: 31,
  },
  watching2Child4: {
    left: 308,
  },
  playButtonCircled: {
    left: 82,
  },
  searchIcon: {
    left: 173,
  },
  personIcon: {
    left: 262,
  },
  watching2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Watching2;
