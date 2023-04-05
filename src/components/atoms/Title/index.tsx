import React from "react";
import { View } from "react-native";
import { Title as Label } from "react-native-paper";
import theme from "src/theme";

interface TitleProps {
  text: string;
  isLight?: boolean;
  testID?: string;
}

const Title: React.FC<TitleProps> = ({ text, isLight, testID }) => (
  <View testID={`title-container-${testID}`}>
    <Label
      testID={`title-text-${testID}`}
      style={{
        fontFamily: theme.FONTS.SEMI_BOLD,
        color: isLight ? theme.COLORS.WHITE : theme.COLORS.TERTIARY,
        fontSize: 22,
      }}
    >
      {text}
    </Label>
  </View>
);

export default Title;
