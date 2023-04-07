import "react-native-reanimated";
import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as ExpoSplashScreen from "expo-splash-screen";

import App from "./App";

ExpoSplashScreen.preventAutoHideAsync();

function Main() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) await ExpoSplashScreen.hideAsync();
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) return <View style={{ flex: 1 }} />;

  return <App />;
}

export default Main;
