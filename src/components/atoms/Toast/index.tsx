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
        return {
          background: theme.COLORS.ERROR_DARK,
          text: theme.COLORS.WHITE,
        };

      case "warning":
        return {
          background: theme.COLORS.WARNING_LIGHT,
          text: theme.COLORS.PRIMARY_900,
        };

      case "sucess":
        return {
          background: theme.COLORS.SUCCESS_LIGHT,
          text: theme.COLORS.WHITE,
        };

      default:
        return { background: theme.COLORS.INFO_DARK, text: theme.COLORS.WHITE };
    }
  }, [type]);

  return (
    <Container
      color={mainColor.background}
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
      <StatusBar backgroundColor={mainColor.background} />

      <Content>
        <Title testID="toast_title_id" text={title} color={mainColor.text} />
        <Label testID="toast_text_id" text={text} color={mainColor.text} />
      </Content>

      <Icon
        name="x"
        color={mainColor.text}
        size={15}
        onPress={() => setVisible(false)}
      />
    </Container>
  );
};

export default Toast;
