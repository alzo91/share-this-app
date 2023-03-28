import React from "react";
import { Container } from "./styles";

interface ScreenProps {
  children: any;
  lightScreen?: boolean;
  testID?: string;
}

export const Screen: React.FC<ScreenProps> = (props) => (
  <Container testID={`screen-${props.testID}`} lightScreen={props.lightScreen}>
    {props.children}
  </Container>
);
