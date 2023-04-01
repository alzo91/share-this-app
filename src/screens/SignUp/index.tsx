import React from "react";
import { useForm } from "react-hook-form";
import { Image, Alert } from "react-native";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { Screen } from "@components/templates/screen";

import FormInput from "@components/molecules/FormInput";
import { signupValidation } from "@utils/validations";

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(signupValidation),
  });

  const navigation = useNavigation<IRootAuthProps>();

  const onSubmit = handleSubmit((data) => {
    const message = `Under construction.\n${data.email} password: ${data.password}`;
    Alert.alert("Share This", message);
  });

  return (
    <Screen lightScreen={true}>
      <Image source={IMAGES.shareThis} style={{ margin: 12 }} />
      <Title isLight={false} text="Fill in your information" />
      <FormInput
        control={control}
        name={"email"}
        placeHolder={"email"}
        iconName={"email"}
      />
      <FormInput
        control={control}
        name={"password"}
        placeHolder={"password"}
        iconName={"key"}
        secureTextEntry={true}
      />

      <FormInput
        control={control}
        name={"passwordConfirmation"}
        placeHolder={"password confirmation"}
        iconName={"eye"}
        secureTextEntry={true}
      />
      <SecundaryButton text="Subscribe" onPress={onSubmit} />
    </Screen>
  );
};

export default SignUp;
