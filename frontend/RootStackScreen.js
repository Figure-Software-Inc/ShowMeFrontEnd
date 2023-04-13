import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Splash" component={SplashScreen}/>
        <RootStack.Screen name="SignIn" component={SignInScreen}/>
        <RootStack.Screen name="SignUp" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;