import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image } from "react-native";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { Screen } from "@components/templates/screen";

import FormInput from "@components/molecules/FormInput";
import { signupValidation } from "@utils/validations";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useToast } from "@hooks/ToastHook";
import { sleep } from "@utils/sleep";

function SignUp() {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const { showToast } = useToast();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(signupValidation),
  });

  const navigation = useNavigation<IRootAuthProps>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsCreating(true);

      const { user } = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      await firestore().collection("users").doc(user.uid).set({
        uuid: user.uid,
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        emailVerified: false,
        isAnonymous: false,
        providerId: user.providerId,
        metada: user.metadata,
      });
      showToast({
        title: "Share This",
        text: "User was created succeful!",
        timeout: 3000,
        type: "sucess",
      });
      await sleep(3250);
      navigation.goBack();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsCreating(false);
    }
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
      <SecundaryButton
        text="Subscribe"
        onPress={onSubmit}
        isLoad={isCreating}
      />
    </Screen>
  );
}

export default SignUp;
