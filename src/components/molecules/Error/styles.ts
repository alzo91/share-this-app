import styled from "styled-components/native";

export const Container = styled.View<{ isStart?: boolean }>`
  flex-direction: row;
  width: 100%;
  margin-left: 10px;
  align-items: ${(props) => (!props.isStart ? "center" : "flex-start")};
`;
