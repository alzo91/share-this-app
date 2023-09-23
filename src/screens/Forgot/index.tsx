import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import { IMAGES } from "@assets/index";
import { Screen } from "@components/templates/screen";
import { Title } from "@components/atoms";
import FormInput from "@components/molecules/FormInput";
import { Link, SecondaryButton } from "@components/molecules";
import { forgotinValidation } from "@utils/validations";
import { useAuth } from "@hooks/AuthHook";

function Forgot() {
  const { forgotPassword, isLoading } = useAuth();
  const { goBack } = useNavigation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotinValidation),
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await forgotPassword(data);
    if (response) goBack();
  });

  return (
    <Screen lightScreen={true}>
      <Image
        testID="logo"
        source={IMAGES.shareThis}
        style={{ marginBottom: 47 }}
      />
      <Title testID="forgot" isLight={false} text="Recovery your account" />
      <FormInput
        control={control}
        name={"email"}
        placeHolder={"email"}
        iconName={"email"}
      />

      <SecondaryButton
        testID="recovery"
        text="Recovery it!"
        onPress={onSubmit}
        isLoad={isLoading}
      />
      <Link isLight={false} onPress={() => goBack()} children="Go to sign in" />
    </Screen>
  );
}

export default Forgot;
