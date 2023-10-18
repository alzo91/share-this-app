import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 100px;
  padding: 6px;
  margin-bottom: 20px;
  margin-top: 2px;
`;

export const LowerContainer = styled.View`
  flex-direction: column;
  margin-bottom: 6px;
`;

export const Bagged = styled.TouchableOpacity<{ width: number }>`
  align-items: flex-end;
  padding: 0 6px;
  background-color: ${(props) => props.theme.COLORS.TERTIARY};
  border-radius: 15px;
  width: ${(props) => props.width}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 13px;
  padding: 0 2px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  padding: 0 2px;
`;
