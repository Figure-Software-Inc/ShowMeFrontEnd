import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import DiscoverScreen from './DiscoverScreen';
import ProfileScreen from './ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Color } from './assets/GlobalStyles';

const Tab = createMaterialBottomTabNavigator();

const DiscoverStack = createStackNavigator();
const SearchStack = createStackNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={Color.orange}
      barStyle={{ backgroundColor: Color.teal }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarColor: Color.white,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-play" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

export const DiscoverStackScreen = ({navigation}) => (
    <DiscoverStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: Color.teal,
      },
      borderTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DiscoverStack.Screen name="Discovery" component={DiscoverScreen} options={{title: 'Discover',       
      headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor={Color.teal} onPress={() => navigation.openDrawer()}>
  
            </Icon.Button>
        )}}/>
    </DiscoverStack.Navigator>
  )
  
export const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: Color.teal,
      },
      borderTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <SearchStack.Screen name="Searchy" component={SearchScreen} options={{
        title: 'Search', 
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor={Color.teal} onPress={() => navigation.openDrawer()}>
  
            </Icon.Button>
        )
      }}/>
    </SearchStack.Navigator>
  )

  export const ProfileStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: Color.teal,
      },
      borderTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <SearchStack.Screen name="Searchy" component={ProfileScreen} options={{
        title: 'Search', 
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor={Color.teal} onPress={() => navigation.openDrawer()}>
  
            </Icon.Button>
        )
      }}/>
    </SearchStack.Navigator>
  )