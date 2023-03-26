import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, ButtonContainer, LabelButton } from "./styles";

interface ButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
}

const SecundaryButton: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <LabelButton>{text}</LabelButton>
      </ButtonContainer>
    </Container>
  );
};

export default SecundaryButton;
