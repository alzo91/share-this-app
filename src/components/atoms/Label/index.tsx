import React from "react";
import { Text } from "./styles";

interface LabelProps {
  text: string;
  isLight?: boolean;
  testID?: string;
}

const Label: React.FC<LabelProps> = ({ text, isLight, testID }) => (
  <Text testID={`label-${testID}`} isLight={isLight}>
    {text}
  </Text>
);

export default Label;
