import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  View, 
  Text, 
  Button,
  StatusBar,
  Image
} from 'react-native';
import { FontFamily, FontSize, Color, Border } from "../assets/GlobalStyles.js";

const DiscoverScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Image
        style={styles.blueVector}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileCircle}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile')}
          style={styles.profileInitialsWrapper}
        >
          <Text style={styles.profileInitials}>CX</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.watching25Child, styles.watching25Layout]} />
      <View style={[styles.watching25Child1, styles.watching25Layout]} />
      <View style={[styles.watching25Child2, styles.watching25Layout2]} />
      
      <Text style={styles.welcome}>Welcome Back Christine!</Text>
      <Text style={styles.viewHistory}>View History</Text>
      <Text style={[styles.jumpBackIn, styles.jumpBackInTypo]}>Jump Back In</Text>
      <Text style={[styles.reccommendedForYou, styles.reccommendedInTypo]}> Reccommended For You </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefcf0',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  watching25Layout: {
    backgroundColor: Color.whitesmoke,
  },
  watching25Layout2: {
    backgroundColor: Color.lightgray_100,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#fefcf0',
  },
  profileWrapper: {
    position: 'relative',
  },
  profileInitialsWrapper: {
    position: 'absolute',
    top: 45,
    right: 41,
    zIndex: 1,
  },
  profileInitials: {
    fontSize: 25,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
  },
  watching25Child: {
    top: 530,
    left: 25,
    width: 360,
    borderRadius: Border.br_xl,
    height: 175,
    position: "absolute",
  },
  watching25Child1: {
    top: 160,
    left: 25,
    width: 360,
    borderRadius: Border.br_xl,
    height: 175,
    position: "absolute",
  },
  watching25Child2: {
    top: 400,
    left: 45,
    width: 360,
    borderRadius: Border.br_xl,
    height: 90,
    position: "absolute",
  },
  profileCircle: {
    top: 30,
    left: 325,
    width: 60,
    height: 60,
    position: "absolute",
  },
  welcome: {
    top: 80,
    fontSize: 25,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    left: 14,
    position: "absolute",
  },
  jumpBackInTypo: {
    fontSize: 20,
    top: 130,
    left: 20,
    width: 176,
    height: 221,
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  viewHistory: {
    top: 130,
    left: 150,
    fontSize: 20,
    fontWeight: "570",
    color: Color.gray,
    fontFamily: FontFamily.spartanMedium,
  },
  reccommendedInTypo: {
    fontSize: 20,
    top: 370,
    left: 20,
    width: 300,
    height: 221,
    color: Color.black,
    fontFamily: FontFamily.spartanSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  register: {
    color: Color.teal,
    fontSize: 18,
  },
  blueVector: {
    top: 150,
    left: 230,
    width: 176,
    height: 221,
    position: "absolute",
  },
  vectorIcon1: {
    top: 550,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute",
  },
});

export default DiscoverScreen;
