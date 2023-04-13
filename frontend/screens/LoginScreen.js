import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';


const LoginScreen = (props) => {
    let [fontsLoaded] = useFonts({
        'Spartan_Bold': require('../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Spartan_Medium': require('../assets/fonts/LeagueSpartan-Medium.ttf'),
    });
    if(!fontsLoaded) {
        <AppLoading />
    }
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1}}>
            <Text style={{fontFamily: 'Spartan_Bold', fontSize: 40}}>
                Hello
            </Text>
        </View>
        <View style={{flex: 1}}>
            <Text style={{textAlign: 'right', fontFamily: 'Spartan_Bold', fontSize: 40}}>
                Hello
            </Text>
        </View>
    </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    circle: {
      width: 25,
      height: 25,
      left: 47,
      top: 161,
      borderRadius: 100 / 2,
      backgroundColor: "#FBBC04",
      position: 'absolute'
    },
    title: {
        fontFamily: 'LeagueSpartan-Bold',
    }
});
