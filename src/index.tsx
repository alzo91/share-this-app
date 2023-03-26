import "react-native-gesture-handler";
import "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Navigations } from "./navigations";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";
import { StatusBar } from "expo-status-bar";

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme.COLORS.TERTIARY}
        animated
        style="dark"
      />
      <ThemeProvider theme={theme}>
        <Navigations />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
