import React from "react";
import { Text } from "./styles";

interface LabelProps {
  text: string;
  isLight?: boolean;
  testID?: string;
  color?: string;
  fontSize?: number;
  numberOfLines?: number;
}

const Label: React.FC<LabelProps> = ({
  text,
  isLight,
  testID,
  color,
  fontSize = 12,
  numberOfLines,
}) => (
  <Text
    testID={`label-${testID}`}
    isLight={isLight}
    color={color}
    fontSize={fontSize}
    numberOfLines={numberOfLines}
  >
    {text}
  </Text>
);

export default Label;
