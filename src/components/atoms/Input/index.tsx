import { TextInput, TextInputProps } from "react-native-paper";
import theme from "src/theme";
import { Container } from "./styles";

interface InputProps extends TextInputProps {
  iconName?: string;
  iconOnPress?: Function;
}

const Input: React.FC<InputProps> = ({
  onBlur,
  onChangeText,
  value,
  label,
  iconOnPress = () => {},
  ...rest
}) => (
  <Container>
    <TextInput
      style={{ flex: 1 }}
      mode="outlined"
      label={label}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      left={
        rest.iconName && (
          <TextInput.Icon
            icon={rest.iconName}
            color={
              rest.error ? theme.COLORS.ERROR_LIGHT : theme.COLORS.INFO_LIGHT
            }
            onPress={() => iconOnPress()}
          />
        )
      }
      {...rest}
    />
  </Container>
);

export default Input;
