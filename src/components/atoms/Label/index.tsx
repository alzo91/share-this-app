import React from "react";
import { Text } from "./styles";

interface LabelProps {
  text: string;
  isLight?: boolean;
  testID?: string;
  color?: string;
}

const Label: React.FC<LabelProps> = ({ text, isLight, testID, color }) => (
  <Text testID={`label-${testID}`} isLight={isLight} color={color}>
    {text}
  </Text>
);

export default Label;
