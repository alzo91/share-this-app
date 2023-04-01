import React from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "src/theme";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const AntDesignIcon: React.FC<IconProps> = ({ name, color, size }) => (
  <AntDesign name={name} size={size} color={color} />
);

export const MaterialCommunityIcon: React.FC<IconProps> = (props) => (
  <MaterialCommunityIcons
    name={props.name}
    size={props.size ?? 26}
    color={props.color ?? theme.COLORS.WHITE}
  />
);
