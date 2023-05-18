import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootLoggedParamsList } from "./types";

function Logged() {
  const Stack = createNativeStackNavigator<RootLoggedParamsList>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default Logged;
