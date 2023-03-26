import React, { ReactNode } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { LightLabel } from "@components/atoms";

interface LinkProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children: string;
}

const Link: React.FC<LinkProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LightLabel text={children} />
    </TouchableOpacity>
  );
};

export default Link;
