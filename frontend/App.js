import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Color, FontFamily, FontSize, Border} from './assets/GlobalStyles';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-paper'

import { DiscoverStackScreen } from './StackScreens';
import { SearchStackScreen } from './StackScreens';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BookmarksScreen from './BookmarksScreen';

import MainTabScreen from './StackScreens';
import { DrawerContent } from './DrawerContent';
import RootStackScreen from './RootStackScreen';
import { 
  SafeAreaView, 
  StyleSheet, 
  ScrollView, 
  View, 
  Text, 
  Button,
  StatusBar,
  ActivityIndicator 
} from 'react-native';

import { AuthContext } from './components/context'

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ... prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    };
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => (<DrawerContent {...props} />)} screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Drawer.Screen name="Home" component={MainTabScreen}/>
            <Drawer.Screen name="Support" component={SupportScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
            <Drawer.Screen name="Bookmarks" component={BookmarksScreen}/>
          </Drawer.Navigator>
        ) : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;