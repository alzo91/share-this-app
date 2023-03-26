import React from "react";
import { Text } from "./styles";

const LightLabel: React.FC<{ text: string }> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default LightLabel;
