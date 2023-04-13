import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookmarksScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
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

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});