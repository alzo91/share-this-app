import React, { useState } from "react";
import { Input, Label } from "@components/atoms";
import { Control, useController } from "react-hook-form";
import AppAlert from "../Error";
import { useTheme } from "styled-components/native";

interface FormInputProps {
  control: Control<any>;
  name: string;
  placeHolder: string;
  iconName?: string;
  secureTextEntry?: boolean;
}
const FormInput: React.FC<FormInputProps> = (props) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(
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
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
        label={props.placeHolder}
        error={!!errors[props.name]}
        iconName={props.iconName}
        secureTextEntry={isSecureTextEntry}
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
