import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  width: 130px;
  margin: 5px;
`;

export const Content = styled.View`
  width: 130px;
  height: 190px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 6px;
`;

export const Bagged = styled.TouchableOpacity<{ width: number }>`
  align-items: flex-end;
  padding: 0 6px;
  background-color: ${(props) => props.theme.COLORS.TERTIARY};
  border-radius: 15px;
  width: ${(props) => props.width}px;
`;

export const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 187,
    borderRadius: 15,
  },
});
