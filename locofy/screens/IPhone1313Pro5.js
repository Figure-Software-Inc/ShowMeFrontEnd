import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IPhone1313Pro5 = () => {
  return (
    <View style={styles.iphone1313Pro5}>
      <View style={styles.iphone1313Pro5Child} />
      <Text style={styles.signUp}>Sign up</Text>
      <Text style={styles.orRegisterWith}>Or register with email</Text>
      <Text style={styles.email}>Email</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <View style={[styles.iphone1313Pro5Item, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro5Inner, styles.iphone1313Layout]} />
      <View style={[styles.rectangleView, styles.iphone1313Layout]} />
      <Image
        style={[styles.linkedinIconColour, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/linkedin-icon--colour1.png")}
      />
      <Image
        style={styles.googleIconColour}
        resizeMode="cover"
        source={require("../assets/google-icon--colour.png")}
      />
      <View style={[styles.lineView, styles.iphone1313ChildLayout]} />
      <View
        style={[styles.iphone1313Pro5Child1, styles.iphone1313ChildLayout]}
      />
      <View
        style={[styles.iphone1313Pro5Child2, styles.iphone1313ChildLayout]}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.facebookIconColour, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/facebook-icon--colour.png")}
      />
      <View style={[styles.at, styles.atLayout]} />
      <View style={[styles.lock, styles.atLayout]} />
      <View style={[styles.identificationcard, styles.atLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro5Child3, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.iphone1313Pro5Child4, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro5Child5, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.iphone1313Pro5Child6}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union4.png")}
      />
      <View style={styles.iphone1313Pro5Child7} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    width: 87,
    left: 85,
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  iphone1313Layout: {
    height: 40,
    width: 77,
    borderWidth: 1,
    borderColor: "#b8b8b8",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 397,
    position: "absolute",
  },
  iconPosition: {
    height: 30,
    top: 402,
    position: "absolute",
  },
  iphone1313ChildLayout: {
    height: 1,
    width: 314,
    borderTopWidth: 1,
    borderColor: "#dedede",
    left: 38,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
    position: "absolute",
    overflow: "hidden",
  },
  atLayout: {
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    height: 25,
    width: 25,
    left: 272,
    position: "absolute",
  },
  iphone1313ChildPosition: {
    top: 161,
    height: 25,
    width: 25,
    position: "absolute",
  },
  iphone1313Pro5Child: {
    top: 835,
    left: 142,
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    width: 106,
    height: 4,
    position: "absolute",
  },
  signUp: {
    top: 274,
    left: 41,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.spartanBold,
    color: Color.black,
    width: 167,
    height: 45,
    textAlign: "left",
    position: "absolute",
  },
  orRegisterWith: {
    top: 487,
    left: 105,
    width: 193,
    color: Color.silver,
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  email: {
    top: 551,
    width: 57,
    left: 85,
    color: Color.silver,
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 615,
    color: Color.silver,
  },
  name: {
    top: 675,
    color: Color.lightgray_100,
  },
  iphone1313Pro5Item: {
    left: 47,
  },
  iphone1313Pro5Inner: {
    left: 156,
  },
  rectangleView: {
    left: 265,
  },
  linkedinIconColour: {
    left: 291,
    width: 35,
  },
  googleIconColour: {
    top: 404,
    width: 26,
    height: 26,
    left: 72,
    position: "absolute",
  },
  lineView: {
    top: 578,
  },
  iphone1313Pro5Child1: {
    top: 704,
  },
  iphone1313Pro5Child2: {
    top: 641,
  },
  vectorIcon: {
    height: "2.49%",
    top: "64.81%",
    bottom: "32.7%",
    left: "11.54%",
    width: "5.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
  },
  vectorIcon1: {
    height: "2.61%",
    width: "4.87%",
    top: "72.27%",
    bottom: "25.12%",
    left: "12.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
  },
  vectorIcon2: {
    height: "2.13%",
    top: "79.86%",
    bottom: "18.01%",
    left: "11.54%",
    width: "5.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
  },
  facebookIconColour: {
    left: 180,
    width: 30,
  },
  at: {
    left: 244,
    top: 610,
    height: 32,
    width: 32,
  },
  lock: {
    left: 276,
    top: 610,
    height: 32,
    width: 32,
  },
  identificationcard: {
    top: 590,
    left: 308,
  },
  ellipseIcon: {
    top: 99,
  },
  iphone1313Pro5Child3: {
    left: 47,
  },
  iphone1313Pro5Child4: {
    left: 72,
  },
  iphone1313Pro5Child5: {
    top: 74,
  },
  iphone1313Pro5Child6: {
    top: 109,
    left: 134,
    width: 61,
    height: 61,
    position: "absolute",
  },
  unionIcon: {
    width: 83,
    height: 62,
  },
  iphone1313Pro5Child7: {
    top: 198,
    left: 202,
    backgroundColor: Color.teal,
    width: 41,
    height: 41,
    transform: [
      {
        rotate: "-43.67deg",
      },
    ],
    position: "absolute",
  },
  iphone1313Pro5: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro5;
