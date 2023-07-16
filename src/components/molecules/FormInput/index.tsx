import React, { useState } from "react";
import { Input } from "@components/atoms";
import { Control, useController } from "react-hook-form";
import AppAlert from "../Error";
import { useTheme } from "styled-components/native";

interface FormInputProps {
  control: Control<any>;
  name: string;
  placeHolder: string;
  iconName?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
}
const FormInput: React.FC<FormInputProps> = (props) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(
    props.secureTextEntry ?? false
  );

  const {
    field,
    formState: { errors },
  } = useController({
    control: props.control,
    name: props.name,
  });
  const { COLORS } = useTheme();
  return (
    <>
      <Input
        testID={`input-${props.name}`}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
        label={props.placeHolder}
        error={!!errors[props.name]}
        iconName={props.iconName}
        secureTextEntry={isSecureTextEntry}
        autoCapitalize={props.autoCapitalize}
        iconOnPress={
          props.secureTextEntry
            ? () => setIsSecureTextEntry(!isSecureTextEntry)
            : () => {}
        }
      />
      {errors[props.name] && (
        <AppAlert
          type="close-circle"
          center={false}
          color={COLORS.ERROR_LIGHT}
          message={errors[props.name]?.message?.toString()}
        />
      )}
    </>
  );
};

export default FormInput;
