import styled from "styled-components/native";
import { Text as Label } from "react-native-paper";

interface TextProps {
  isLight?: boolean;
  color?: string;
}

export const Text = styled(Label)<TextProps>`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: 12px;
  color: ${(props) =>
    props.color
      ? props.color
      : props.isLight
      ? props.theme.COLORS.WHITE
      : props.theme.COLORS.TERTIARY};
`;
