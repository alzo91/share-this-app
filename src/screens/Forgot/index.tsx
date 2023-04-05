import React, { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";

import { IMAGES } from "@assets/index";
import { Screen } from "@components/templates/screen";
import { Title } from "@components/atoms";
import FormInput from "@components/molecules/FormInput";
import { Link, SecundaryButton } from "@components/molecules";
import { forgotinValidation } from "@utils/validations";
import { useToast } from "@hooks/ToastHook";
import { sleep } from "@utils/sleep";

function Forgot() {
  const [isLoad, setLoad] = useState<boolean>(false);

  const { showToast } = useToast();
  const { goBack } = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotinValidation),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoad(true);
      await auth().sendPasswordResetEmail(data.email);
      showToast({
        title: "Forgot your password",
        text: `We sent you an email to recovery your password. Please, check your email`,
        type: "info",
        timeout: 3000,
      });
      await sleep(3150);
      goBack();
    } catch (error) {
      console.error({ error });
    } finally {
      setLoad(false);
    }
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

      <SecundaryButton text="Recovery it!" onPress={onSubmit} isLoad={isLoad} />
      <Link isLight={false} onPress={() => goBack()} children="Go to sign in" />
    </Screen>
  );
}

export default Forgot;
