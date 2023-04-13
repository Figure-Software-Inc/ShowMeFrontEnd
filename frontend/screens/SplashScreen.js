import React from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {LinearGradient} from 'expo-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Color } from '../assets/GlobalStyles';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="2500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                borderRadius={200}
                />
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.title}>Who's ready to learn?</Text>
                <Text style={styles.text}>Sign in with your account or create a new one!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <LinearGradient
                        colors={[Color.orange, Color.tomato]}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Sign In</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={30}
                        />
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <LinearGradient
                        colors={[Color.tomato, Color.orange]}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Sign Up</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={30}
                        />
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Color.khaki
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: Color.orange,
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: Color.silver,
      marginTop:5
  },
  button: {
      marginTop: 30,
  },
  signIn: {
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
  }
});
