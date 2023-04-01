import { Label, MaterialCommunityIcon as Icon } from "@components/atoms";
import React from "react";
import { Container } from "./styles";

interface AlertProps {
  message?: string;
  type: "information-outline" | "alert-circle" | "close-circle";
  color?: string;
  center?: boolean;
}

const AppAlert: React.FC<AlertProps> = ({ message, center, type, color }) => (
  <Container isStart={center}>
    <Icon name={type} color={color} size={16} />
    <Label text={message ?? "An error ocurred"} isLight={false} />
  </Container>
);

export default AppAlert;
