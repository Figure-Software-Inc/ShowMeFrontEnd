import React from 'react';
import { View, Text, Button, StyleSheet, Settings } from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});