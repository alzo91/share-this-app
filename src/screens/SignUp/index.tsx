import React from "react";
import { Image } from "react-native";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { Screen } from "@components/templates/screen";
import FormInput from "@components/molecules/FormInput";

import { useAuth } from "@hooks/AuthHook";

import { signupValidation } from "@utils/validations";

function SignUp() {
  const { isLoading, subscribe } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = handleSubmit(async (data) => {
    await subscribe({
      email: data.email,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation!,
    });
  });

  return (
    <Screen lightScreen={true}>
      <Image testID="logo" source={IMAGES.shareThis} style={{ margin: 12 }} />
      <Title isLight={false} text="Fill in your information" testID="signup" />
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
      <SecundaryButton text="Subscribe" onPress={onSubmit} isLoad={isLoading} />
    </Screen>
  );
}

export default SignUp;
