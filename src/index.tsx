import React, { useEffect } from "react";
import { View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as ExpoSplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import Navigations from "./navigations";
import theme from "./theme";
import HookProviders from "./hooks";

// ExpoSplashScreen.preventAutoHideAsync();

function App() {
  // const [fontsLoaded] = useFonts({
  //   Poppins_400Regular,
  //   Poppins_500Medium,
  //   Poppins_600SemiBold,
  //   Poppins_700Bold,
  // });

  // useEffect(() => {
  //   (async () => {
  //     if (fontsLoaded) await ExpoSplashScreen.hideAsync();
  //   })();
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return <View />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.COLORS.TERTIARY} style="light" />
      <HookProviders>
        <Navigations />
      </HookProviders>
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
