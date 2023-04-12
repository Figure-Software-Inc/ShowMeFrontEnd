import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1313Pro7 = () => {
  return (
    <View style={styles.iphone1313Pro7}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector21.png")}
      />
      <View style={styles.iphone1313Pro7Child} />
      <Text style={styles.signUp}>Sign up</Text>
      <Text style={styles.orRegisterWith}>Or register with email</Text>
      <Text style={styles.email}>Email</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <View style={[styles.iphone1313Pro7Item, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro7Inner, styles.iphone1313Layout]} />
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
        style={[styles.iphone1313Pro7Child1, styles.iphone1313ChildLayout]}
      />
      <View
        style={[styles.iphone1313Pro7Child2, styles.iphone1313ChildLayout]}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
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
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    width: 87,
    left: 85,
    color: Color.silver,
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
    top: 377,
    position: "absolute",
  },
  iconPosition: {
    height: 30,
    top: 382,
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
    top: 590,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    top: 708,
    left: 233,
    width: 210,
    height: 263,
    position: "absolute",
  },
  iphone1313Pro7Child: {
    top: 835,
    left: 142,
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    width: 106,
    height: 4,
    position: "absolute",
  },
  signUp: {
    top: 254,
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
    top: 467,
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
    top: 531,
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
    top: 595,
  },
  name: {
    top: 655,
  },
  iphone1313Pro7Item: {
    left: 47,
  },
  iphone1313Pro7Inner: {
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
    top: 384,
    left: 72,
    width: 26,
    height: 26,
    position: "absolute",
  },
  lineView: {
    top: 558,
  },
  iphone1313Pro7Child1: {
    top: 684,
  },
  iphone1313Pro7Child2: {
    top: 621,
  },
  vectorIcon1: {
    height: "2.49%",
    top: "62.44%",
    bottom: "35.07%",
    left: "11.54%",
    width: "5.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
  },
  vectorIcon2: {
    height: "2.61%",
    width: "4.87%",
    top: "69.91%",
    bottom: "27.49%",
    left: "12.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "83.08%",
  },
  vectorIcon3: {
    height: "2.13%",
    top: "77.49%",
    bottom: "20.38%",
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
  },
  lock: {
    left: 276,
  },
  identificationcard: {
    left: 308,
  },
  vectorIcon4: {
    top: 0,
    left: 0,
    width: 213,
    height: 184,
    position: "absolute",
  },
  vectorIcon5: {
    top: 171,
    left: 260,
    width: 171,
    height: 182,
    position: "absolute",
  },
  iphone1313Pro7: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro7;
