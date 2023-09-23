import React from "react";
import { View } from "react-native";
import theme from "src/theme";
import { Label, SquareButton, Title } from "@components/atoms";

interface SquareContainerProps {
  backgroundColor?: string;
  title?: string;
  text?: string;
}
const SquareContainer: React.FC<SquareContainerProps> = ({
  backgroundColor = theme.COLORS.SECONDARY_500,
  text,
  title,
}) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <SquareButton size={58} backgroundColor={backgroundColor}>
      <Title text={`${title}`} fontSize={12} />
    </SquareButton>
    <Label text={`${text}`} fontSize={10} />
  </View>
);

export default SquareContainer;
