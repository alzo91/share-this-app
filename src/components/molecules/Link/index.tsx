import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Label } from "@components/atoms";

interface LinkProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children: string;
  isLight?: boolean;
  testID?: string;
}

const Link: React.FC<LinkProps> = ({
  onPress,
  children,
  isLight = false,
  testID,
}) => (
  <TouchableOpacity testID={`link-container-${testID}`} onPress={onPress}>
    <Label isLight={isLight} text={children} />
  </TouchableOpacity>
);

export default Link;
