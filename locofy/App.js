const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TopicScreen from "./screens/TopicScreen";
import TopicScreen1 from "./screens/TopicScreen1";
import Search1 from "./screens/Search1";
import Watching25 from "./screens/Watching25";
import Watching251 from "./screens/Watching251";
import Watching2511 from "./screens/Watching2511";
import Watching2 from "./screens/Watching2";
import IPhone1313Pro8 from "./screens/IPhone1313Pro8";
import IPhone1313Pro7 from "./screens/IPhone1313Pro7";
import IPhone1313Pro6 from "./screens/IPhone1313Pro6";
import IPhone1313Pro5 from "./screens/IPhone1313Pro5";
import IPhone1313Pro4 from "./screens/IPhone1313Pro4";
import IPhone1313Pro3 from "./screens/IPhone1313Pro3";
import IPhone1313Pro2 from "./screens/IPhone1313Pro2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TopicScreen"
              component={TopicScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopicScreen1"
              component={TopicScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search1"
              component={Search1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Watching25"
              component={Watching25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Watching251"
              component={Watching251}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Watching252"
              component={Watching2511}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Watching2"
              component={Watching2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro8"
              component={IPhone1313Pro8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro7"
              component={IPhone1313Pro7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro6"
              component={IPhone1313Pro6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro5"
              component={IPhone1313Pro5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro4"
              component={IPhone1313Pro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro3"
              component={IPhone1313Pro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro2"
              component={IPhone1313Pro2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
