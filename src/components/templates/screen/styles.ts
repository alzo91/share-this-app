import styled from "styled-components/native";

interface ICotainerProps {
  lightScreen?: boolean;
}
export const Container = styled.View<ICotainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 3px;
  background-color: ${(props) =>
    props.lightScreen ? props.theme.COLORS.WHITE : props.theme.COLORS.TERTIARY};
`;
