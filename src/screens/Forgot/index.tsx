import React from "react";
import { Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotinValidation } from "@utils/validations";
import { useForm } from "react-hook-form";

import { Screen } from "@components/templates/screen";
import { Title } from "@components/atoms";
import FormInput from "@components/molecules/FormInput";
import { IMAGES } from "@assets/index";
import { Link, SecundaryButton } from "@components/molecules";

export const Forgot = () => {
  const { goBack } = useNavigation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotinValidation),
  });

  const onSubmit = handleSubmit((data) => {
    const message = `Under construction.\n${data.email}`;
    Alert.alert("Share This", message);
  });

  return (
    <Screen lightScreen={true}>
      <Image source={IMAGES.shareThis} style={{ marginBottom: 47 }} />
      <Title isLight={false} text="Recovery your account" />
      <FormInput
        control={control}
        name={"email"}
        placeHolder={"email"}
        iconName={"email"}
      />

      <SecundaryButton text="Sign in" onPress={onSubmit} />
      <Link
        isLight={false}
        onPress={() => goBack()}
        children="Recoverie your password"
      />
    </Screen>
  );
};
