import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { Title as Label } from "react-native-paper";
interface TitleProps {
  text: string;
  isLight?: boolean;
  testID?: string;
}

const Title: React.FC<TitleProps> = ({ text, isLight, testID }) => {
  const { COLORS, FONTS } = useTheme();

  return (
    <View testID={`title-container-${testID}`}>
      <Label
        testID={`title-text-${testID}`}
        style={{
          fontFamily: FONTS.SEMI_BOLD,
          color: isLight ? COLORS.WHITE : COLORS.TERTIARY,
          fontSize: 22,
        }}
      >
        {text}
      </Label>
    </View>
  );
};

export default Title;
