import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Search1 = () => {
  return (
    <View style={styles.search1}>
      <View style={styles.search1Child} />
      <Text style={[styles.startLearning, styles.startLearningTypo]}>
        Start Learning
      </Text>
      <Text style={[styles.existingTopics, styles.startLearningTypo]}>
        Existing Topics
      </Text>
      <View style={[styles.search1Item, styles.search1Layout1]} />
      <View style={[styles.search1Inner, styles.search1Layout]} />
      <View style={[styles.rectangleView, styles.search1Layout1]} />
      <View style={[styles.search1Child1, styles.search1ChildPosition]} />
      <View style={[styles.search1Child2, styles.search1ChildPosition]} />
      <View style={[styles.search1Child3, styles.search1ChildLayout]} />
      <View style={[styles.search1Child4, styles.search1ChildLayout]} />
      <View style={[styles.search1Child5, styles.search1ChildLayout]} />
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
      <Image
        style={styles.bookmarksimpleIcon}
        resizeMode="cover"
        source={require("../assets/bookmarksimple.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startLearningTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  search1Layout1: {
    height: 28,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  search1Layout: {
    width: 137,
    left: 214,
  },
  search1ChildPosition: {
    top: 255,
    height: 28,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  search1ChildLayout: {
    width: 96,
    top: 313,
    height: 28,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  search1Child: {
    top: 769,
    left: 0,
    width: 390,
    height: 75,
    backgroundColor: Color.teal,
    position: "absolute",
  },
  startLearning: {
    top: 61,
    left: 18,
    fontSize: FontSize.size_6xl,
  },
  existingTopics: {
    top: 116,
    fontSize: FontSize.size_base,
    left: 23,
  },
  search1Item: {
    width: 174,
    left: 23,
    backgroundColor: Color.orange,
    top: 150,
    height: 28,
    borderRadius: Border.br_8xs,
  },
  search1Inner: {
    height: 28,
    borderRadius: Border.br_8xs,
    position: "absolute",
    top: 150,
    backgroundColor: Color.teal,
  },
  rectangleView: {
    top: 197,
    width: 278,
    backgroundColor: Color.tomato,
    left: 23,
  },
  search1Child1: {
    width: 174,
    left: 23,
    backgroundColor: Color.teal,
  },
  search1Child2: {
    width: 137,
    left: 214,
    backgroundColor: Color.orange,
  },
  search1Child3: {
    left: 21,
    backgroundColor: Color.tomato,
  },
  search1Child4: {
    left: 147,
    backgroundColor: Color.teal,
  },
  search1Child5: {
    left: 273,
    backgroundColor: Color.tomato,
  },
  playcircleIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  magnifyingglassIcon: {
    width: 46,
    height: 46,
    marginLeft: 46,
    overflow: "hidden",
  },
  playcircleParent: {
    top: 783,
    left: 79,
    flexDirection: "row",
    position: "absolute",
  },
  bookmarksimpleIcon: {
    top: 787,
    left: 271,
    width: 38,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  search1: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Search1;
