import React from "react";
import { ThemeProvider } from "styled-components/native";

import THEME from "src/theme";

export const Wrapper: React.FC<{ children: any }> = ({ children }) => (
  <ThemeProvider theme={THEME}>{children}</ThemeProvider>
);
