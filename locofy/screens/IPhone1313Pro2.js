import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1313Pro2 = () => {
  return (
    <View style={styles.iphone1313Pro2}>
      <Text style={[styles.logIn, styles.logTypo]}>Log In</Text>
      <Text style={[styles.orSignIn, styles.orSignInTypo]}>
        Or sign in with
      </Text>
      <Text style={[styles.newToShomeContainer, styles.orSignInTypo]}>
        <Text style={styles.newToShome}>{`New to ShoMe? `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <View style={[styles.iphone1313Pro2Child, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro2Item, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro2Inner, styles.iphone1313Layout]} />
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
      <View style={[styles.iphone1313Pro2Child1, styles.lineViewLayout]} />
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
      <View style={[styles.logInButton, styles.iphone1313Layout]}>
        <View style={[styles.logInButtonChild, styles.childBg]} />
      </View>
      <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro2Child2, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={[styles.iphone1313Pro2Child3, styles.iphone1313ChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1313Pro2Child4, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.iphone1313Pro2Child5}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union4.png")}
      />
      <View style={[styles.iphone1313Pro2Child6, styles.childBg]} />
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
    color: Color.lightgray_100,
    fontFamily: FontFamily.spartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  iphone1313Layout: {
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
  childBg: {
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
    color: Color.lightgray_100,
  },
  newToShome: {
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
  iphone1313Pro2Child: {
    left: 47,
    width: 77,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 660,
    height: 40,
  },
  iphone1313Pro2Item: {
    left: 156,
    width: 77,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 660,
    height: 40,
  },
  iphone1313Pro2Inner: {
    left: 265,
    width: 77,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 660,
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
  iphone1313Pro2Child1: {
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
  logInButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    width: "100%",
    backgroundColor: Color.teal,
  },
  logInButton: {
    top: 518,
    left: 82,
    width: 225,
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
  iphone1313Pro2Child2: {
    left: 43,
  },
  iphone1313Pro2Child3: {
    left: 68,
  },
  iphone1313Pro2Child4: {
    top: 64,
  },
  iphone1313Pro2Child5: {
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
  iphone1313Pro2Child6: {
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
  iphone1313Pro2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1313Pro2;
