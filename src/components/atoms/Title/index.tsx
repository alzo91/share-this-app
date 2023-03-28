import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

interface TitleProps {
  text: string;
  isLight?: boolean;
  testID?: string;
}
const Title: React.FC<TitleProps> = ({ text, isLight, testID }) => {
  const { COLORS, FONTS } = useTheme();

  const styles = StyleSheet.create({
    title: {
      fontFamily: FONTS.SEMI_BOLD,
      color: isLight ? COLORS.WHITE : COLORS.TERTIARY,
      fontSize: 22,
    },
  });

  return (
    <View testID={`title-container-${testID}`}>
      <Text testID={`title-text-${testID}`} style={styles.title}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
