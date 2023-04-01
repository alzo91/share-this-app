import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 12px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.COLORS.WHITE};
  border-width: 1px;
  border-radius: 15px;
  width: 100%;
  height: 46px;
  margin: 12px;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  margin-left: 5px;
  font-family: ${(props) => props.theme.FONTS.SEMI_BOLD};
  color: ${(props) => props.theme.COLORS.WHITE};
`;
