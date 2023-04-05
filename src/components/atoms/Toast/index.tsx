import React, { useMemo } from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Container, Content, IContainerProps } from "./style";
import { Title, Label } from "../";
import theme from "src/theme";

export type IToastProps = IContainerProps & {
  title: string;
  text: string;
  timeout: number;
  isVisible: boolean;
  setVisible: Function;
};

const Toast: React.FC<IToastProps> = ({ type, text, title, setVisible }) => {
  const mainColor = useMemo(() => {
    switch (type) {
      case "error":
        return theme.COLORS.ERROR_DARK;

      case "warning":
        return theme.COLORS.WARNING_LIGHT;

      case "sucess":
        return theme.COLORS.SUCCESS_LIGHT;

      default:
        return theme.COLORS.INFO_DARK;
    }
  }, [type]);

  return (
    <Container
      color={mainColor}
      from={{
        opacity: 0,
        translateY: -10,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      exit={{
        opacity: 0,
        translateY: -10,
      }}
    >
      <StatusBar backgroundColor={mainColor} />

      <Content>
        <Title testID="toast_title_id" text={title} />
        <Label testID="toast_text_id" text={text} />
      </Content>

      <Icon
        name="x"
        color={theme.COLORS.WHITE}
        size={15}
        onPress={() => setVisible(false)}
      />
    </Container>
  );
};

export default Toast;
