import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewShares from "@screens/Shares/New";
import BottomNavigator from "./BottomNav";
import { RootLoggedParamsList } from "./types";

function Logged() {
  const Stack = createNativeStackNavigator<RootLoggedParamsList>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen
          name="InitialApp"
          component={BottomNavigator}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="NewShares"
          component={NewShares}
          options={{
            animation: "fade_from_bottom",
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default Logged;
