import React from "react";
import { SquareButton, SquareButtonProps } from "./styles";

const Square: React.FC<SquareButtonProps> = ({
  children,
  size,
  backgroundColor,
  ...rest
}) => (
  <SquareButton {...rest} size={size} backgroundColor={backgroundColor}>
    {children}
  </SquareButton>
);

export default Square;
