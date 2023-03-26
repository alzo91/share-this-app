import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Label } from "@components/atoms";

interface LinkProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children: string;
  isLight?: boolean;
}

const Link: React.FC<LinkProps> = ({ onPress, children, isLight = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Label isLight={isLight} text={children} />
    </TouchableOpacity>
  );
};

export default Link;
