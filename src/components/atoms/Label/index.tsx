import React from "react";
import { Text } from "./styles";

interface LabelProps {
  text: string;
  isLight?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, isLight }) => {
  return <Text isLight={isLight}>{text}</Text>;
};

export default Label;
