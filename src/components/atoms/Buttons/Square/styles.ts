import React from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

export interface SquareButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size: number;
}

type ButtonProps = Omit<SquareButtonProps, "children">;

export const SquareButton = styled.TouchableOpacity<ButtonProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  align-items: center;
  justify-content: center;
`;
