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
const DiscoverScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Discover Screen</Text>
        <Button 
          title="Go to search screen"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    )
  }
export default DiscoverScreen;