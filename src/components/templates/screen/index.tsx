import React from "react";
import { Container } from "./styles";

export const Screen: React.FC<{ children: any; lightScreen?: boolean }> = ({
  children,
  lightScreen,
}) => {
  return <Container lightScreen={lightScreen}>{children}</Container>;
};
