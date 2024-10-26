import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import NewShares from "@screens/Shares/New";
import BottomNavigator from "./BottomNav";
import RootLoggedParamsList from "./types";
import EditShare from "@screens/Shares/Edit";
import NewItems from "@screens/Shares/New/items";

const Stack = createNativeStackNavigator<RootLoggedParamsList>();

function Logged() {
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
        <Stack.Screen
          name="AddItemsToShare"
          component={NewItems}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="EditShare"
          component={EditShare}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default Logged;
