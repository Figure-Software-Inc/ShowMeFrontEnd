import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    ScrollView, 
    View, 
    Text, 
    Button,
    StatusBar 
  } from 'react-native';
const ProfileScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
        <Button 
          title="Go to discover screen"
          onPress={() => navigation.navigate("Discover")}
        />
        <Button 
          title="Go to search screen"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    )
  }
export default ProfileScreen;