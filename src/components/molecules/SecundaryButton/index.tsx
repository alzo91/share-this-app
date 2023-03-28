import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, ButtonContainer, LabelButton } from "./styles";

interface ButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  testID?: string;
}

const SecundaryButton: React.FC<ButtonProps> = ({ text, onPress, testID }) => (
  <Container testID={`button-container-${testID}`}>
    <ButtonContainer testID={`button-${testID}`} onPress={onPress}>
      <LabelButton testID={`button-label-${testID}`}>{text}</LabelButton>
    </ButtonContainer>
  </Container>
);

export default SecundaryButton;
