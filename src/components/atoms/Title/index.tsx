import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

const Title: React.FC<{ text: string; isLight?: boolean }> = ({
  text,
  isLight,
}) => {
  const { COLORS, FONTS } = useTheme();

  const styles = StyleSheet.create({
    title: {
      fontFamily: FONTS.SEMI_BOLD,
      color: isLight ? COLORS.WHITE : COLORS.TERTIARY,
      fontSize: 22,
    },
  });

  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;
