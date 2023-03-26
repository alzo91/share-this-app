import styled from "styled-components/native";

interface TextProps {
  isLight?: boolean;
}
export const Text = styled.Text<TextProps>`
  font-family: ${(props) => props.theme.FONTS.REGULAR};
  font-size: 12px;
  color: ${(props) =>
    props.isLight ? props.theme.COLORS.WHITE : props.theme.COLORS.TERTIARY};
`;
