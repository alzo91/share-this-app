import React, { useContext, ReactNode } from "react";
import { View } from "react-native";
import ExpoConstants from "expo-constants";
import { ThemeContext } from "styled-components/native";

interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  const theme = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: theme.COLORS.WHITE,
        justifyContent: "flex-start",
        marginTop: ExpoConstants.statusBarHeight,
      }}
    >
      {children}
    </View>
  );
}

export { Page };
