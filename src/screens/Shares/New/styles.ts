import styled from "styled-components/native";

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  padding: 7px;
  border-radius: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px;
  padding: 4px;
  margin: 0 4px;
  align-self: center;
  text-align: right;
`;

export const ImageContainer = styled.TouchableOpacity<{ selected: boolean }>`
  width: 71px;
  height: 89px;
  margin: 7px;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: ${({ theme }) => theme.COLORS.TERTIARY};
`;

export const ImageBox = styled.View`
  width: 70px;
  height: 85px;
`;
