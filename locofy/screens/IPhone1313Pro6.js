import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1313Pro6 = () => {
  return (
    <View style={styles.iphone1313Pro6}>
      <Text style={[styles.logIn, styles.logTypo]}>Log In</Text>
      <Text style={[styles.orSignIn, styles.orSignInTypo]}>
        Or sign in with
      </Text>
      <Text style={[styles.newToShomeContainer, styles.orSignInTypo]}>
        <Text style={styles.newToShome}>New to ShoMe?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <View style={[styles.iphone1313Pro6Child, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro6Item, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro6Inner, styles.iphone1313Layout]} />
      <Image
        style={[styles.linkedinIconColour, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/linkedin-icon--colour.png")}
      />
      <Image
        style={styles.googleIconColour}
        resizeMode="cover"
        source={require("../assets/google-icon--colour.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.iphone1313Pro6Child1, styles.lineViewLayout]} />
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
      <View style={styles.rectangleView} />
      <Image
        style={[styles.facebookIconColour, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/facebook-icon--colour.png")}
      />
      <View style={[styles.iphone1313Pro6Child2, styles.iphone1313ChildBg]} />
      <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro6Child3, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.iphone1313Pro6Child4, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro6Child5, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.iphone1313Pro6Child6}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union4.png")}
      />
      <View style={[styles.iphone1313Pro6Child7, styles.iphone1313ChildBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  logTypo: {
    textAlign: "left",
    fontFamily: FontFamily.spartanBold,
    fontWeight: "700",
    position: "absolute",
  },
  orSignInTypo: {
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  emailTypo: {
    left: 85,
    color: Color.silver,
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  iphone1313Layout: {
    width: 77,
    borderWidth: 1,
    borderColor: "#b8b8b8",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 660,
    height: 40,
    position: "absolute",
  },
  iconPosition: {
    height: 30,
    top: 665,
    position: "absolute",
  },
  lineViewLayout: {
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
  iphone1313ChildBg: {
    backgroundColor: Color.teal,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 25,
    width: 25,
    left: 268,
    position: "absolute",
  },
  iphone1313ChildPosition: {
    top: 151,
    height: 25,
    width: 25,
    position: "absolute",
  },
  logIn: {
    top: 260,
    left: 40,
    fontSize: FontSize.size_16xl,
    color: Color.black,
    width: 167,
    height: 45,
  },
  orSignIn: {
    top: 617,
    left: 123,
    width: 125,
    color: Color.silver,
  },
  newToShome: {
    color: Color.silver,
  },
  text: {
    color: Color.lightgray_100,
  },
  register: {
    color: Color.teal,
  },
  newToShomeContainer: {
    top: 754,
    left: 91,
    width: 208,
  },
  email: {
    top: 380,
    width: 57,
  },
  password: {
    top: 444,
    width: 87,
  },
  iphone1313Pro6Child: {
    left: 47,
    height: 40,
  },
  iphone1313Pro6Item: {
    left: 156,
    height: 40,
  },
  iphone1313Pro6Inner: {
    left: 265,
    height: 40,
  },
  linkedinIconColour: {
    left: 291,
    width: 35,
  },
  googleIconColour: {
    top: 667,
    left: 72,
    width: 26,
    height: 26,
    position: "absolute",
  },
  lineView: {
    top: 407,
  },
  iphone1313Pro6Child1: {
    top: 470,
  },
  vectorIcon: {
    height: "2.49%",
    width: "5.38%",
    top: "44.55%",
    bottom: "52.96%",
    left: "11.54%",
  },
  vectorIcon1: {
    height: "2.61%",
    width: "4.87%",
    top: "52.01%",
    bottom: "45.38%",
    left: "12.05%",
  },
  rectangleView: {
    top: 835,
    left: 142,
    backgroundColor: Color.black,
    width: 106,
    height: 4,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  facebookIconColour: {
    left: 180,
    width: 30,
  },
  iphone1313Pro6Child2: {
    top: 518,
    left: 82,
    width: 225,
    borderRadius: Border.br_xl,
    height: 40,
  },
  logIn1: {
    top: 529,
    left: 165,
    fontSize: FontSize.size_base,
    color: Color.white,
    width: 63,
    height: 24,
  },
  ellipseIcon: {
    top: 89,
  },
  iphone1313Pro6Child3: {
    left: 43,
  },
  iphone1313Pro6Child4: {
    left: 68,
  },
  iphone1313Pro6Child5: {
    top: 64,
  },
  iphone1313Pro6Child6: {
    top: 99,
    left: 130,
    width: 61,
    height: 61,
    position: "absolute",
  },
  unionIcon: {
    width: 83,
    height: 62,
  },
  iphone1313Pro6Child7: {
    top: 188,
    left: 198,
    width: 41,
    height: 41,
    transform: [
      {
        rotate: "-43.67deg",
      },
    ],
  },
  iphone1313Pro6: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro6;
