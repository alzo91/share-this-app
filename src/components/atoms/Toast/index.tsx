import React, { useEffect, useMemo, useState } from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import theme from "src/theme";
import { Container, Content } from "./style";
import { StatusProps, ToastComponentProps } from "./interface";
import { Title, Label } from "../index";

const statusScreen: StatusProps = {
  error: {
    background: theme.COLORS.ERROR_DARK,
    text: theme.COLORS.WHITE,
  },
  warning: {
    background: theme.COLORS.WARNING_LIGHT,
    text: theme.COLORS.PRIMARY_900,
  },
  success: {
    background: theme.COLORS.SUCCESS_LIGHT,
    text: theme.COLORS.WHITE,
  },
  info: {
    background: theme.COLORS.INFO_LIGHT,
    text: theme.COLORS.WHITE,
  },
};

function Toast(props: ToastComponentProps) {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const colors = useMemo(() => statusScreen[props.type], [props.type]);

  useEffect(() => {
    if (timerId) clearTimeout(timerId);
    const timeoutId = setTimeout(() => props.closeAction(), props.timeout);
    setTimerId(timeoutId);
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <Container
      color={colors.background}
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
      <StatusBar backgroundColor={colors.background} />

      <Content>
        <Title
          testID="toast_title_id"
          text={`${props.title}`}
          color={colors.text}
        />
        <Label
          testID="toast_text_id"
          text={`${props.text}`}
          color={colors.text}
        />
      </Content>

      <Icon
        name="x"
        color={colors.text}
        size={15}
        onPress={() => props.closeAction()}
      />
    </Container>
  );
}

export default Toast;
