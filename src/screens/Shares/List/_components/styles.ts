import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 100px;
  padding: 6px;
  margin-bottom: 20px;
`;

export const LowerContainer = styled.View``;

export const Bagged = styled.TouchableOpacity<{ width: number }>`
  align-items: flex-end;
  padding: 0 6px;
  background-color: ${(props) => props.theme.COLORS.TERTIARY};
  border-radius: 15px;
  width: ${(props) => props.width}px;
`;
