import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import Navigations from "./navigations";
import theme from "./theme";
import HookProviders from "./hooks";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.COLORS.TERTIARY} style="light" />
      <HookProviders>
        <Navigations />
      </HookProviders>
    </ThemeProvider>
  );
}

export default App;
