import styled from "styled-components/native";
import { Text as Label } from "react-native-paper";

interface TextProps {
  isLight?: boolean;
  color?: string;
  fontSize?: number;
}

export const Text = styled(Label)<TextProps>`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: ${(props) => props.fontSize ?? 12}px;
  color: ${(props) =>
    props.color
      ? props.color
      : props.isLight
      ? props.theme.COLORS.WHITE
      : props.theme.COLORS.TERTIARY};
`;
