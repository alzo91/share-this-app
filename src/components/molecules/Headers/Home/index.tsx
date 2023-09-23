import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Label,
  MaterialCommunityIcon,
  SquareButton,
  Title,
} from "@components/atoms";
import { Container, MiddleContainer } from "./styles";
import { useTheme } from "styled-components/native";
import { emptyFunction } from "@utils/emptyFunction";

type HomeHeaderProps = {
  leftOnPress?: Function;
  leftIcon?: string;
  leftSizeIcon?: number;
  rightIcon?: string;
  rightSizeIcon?: number;
  rightOnPress?: Function;
  title?: string;
  subTitle?: string;
};

function HomeHeader({
  leftOnPress = emptyFunction,
  rightOnPress = emptyFunction,
  leftIcon = "account-circle",
  leftSizeIcon = 16,
  rightIcon = "logout",
  rightSizeIcon = 16,
  subTitle = "",
  title = "",
}: HomeHeaderProps) {
  const theme = useTheme();
  return (
    <Container>
      <SquareButton
        size={46}
        backgroundColor={theme.COLORS.TERTIARY}
        onPress={() => leftOnPress()}
      >
        <MaterialCommunityIcon name={leftIcon} size={leftSizeIcon} />
      </SquareButton>
      <MiddleContainer>
        <Title text={`${title}`} />
        <TouchableOpacity>
          <Label text={`${subTitle}`} />
        </TouchableOpacity>
      </MiddleContainer>
      <SquareButton size={46} onPress={() => rightOnPress()}>
        <MaterialCommunityIcon
          name={rightIcon}
          size={rightSizeIcon}
          color={theme.COLORS.TERTIARY}
        />
      </SquareButton>
    </Container>
  );
}
export default HomeHeader;
