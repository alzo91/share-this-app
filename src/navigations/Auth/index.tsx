import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "@screens/Splash";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { Forgot } from "@screens/Forgot";
import { RootAuthParamsList } from "./types";

const Stack = createNativeStackNavigator<RootAuthParamsList>();

export const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};
