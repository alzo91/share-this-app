import React, { useMemo } from "react";
import { View } from "react-native";
import { Title as Label } from "react-native-paper";
import theme from "src/theme";

interface TitleProps {
  text: string;
  isLight?: boolean;
  testID?: string;
  color?: string;
  fontSize?: number;
  numberOfLines?: number;
}

const Title: React.FC<TitleProps> = ({
  color,
  text,
  isLight,
  testID,
  fontSize = 16,
  numberOfLines,
}) => {
  const textColor = useMemo(() => {
    if (color) return color;
    return isLight ? theme.COLORS.WHITE : theme.COLORS.TERTIARY;
  }, [isLight, color]);

  return (
    <View testID={`title-container-${testID}`}>
      <Label
        testID={`title-text-${testID}`}
        style={{
          fontFamily: theme.FONTS.SEMI_BOLD,
          color: textColor,
          fontSize,
        }}
        numberOfLines={numberOfLines}
      >
        {text}
      </Label>
    </View>
  );
};

export default Title;
