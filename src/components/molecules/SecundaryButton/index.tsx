import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, ButtonContainer, LabelButton } from "./styles";
import { MaterialCommunityIcon as Icon } from "@components/atoms";

interface ButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  testID?: string;
  iconName?: string;
  iconSize?: number;
}

const SecundaryButton: React.FC<ButtonProps> = (props) => (
  <Container testID={`button-container-${props.testID}`}>
    <ButtonContainer testID={`button-${props.testID}`} onPress={props.onPress}>
      {props.iconName && <Icon name={props.iconName} size={props.iconSize} />}
      <LabelButton testID={`button-label-${props.testID}`}>
        {props.text}
      </LabelButton>
    </ButtonContainer>
  </Container>
);

export default SecundaryButton;
