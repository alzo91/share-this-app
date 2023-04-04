import React, { useState } from "react";
import { Image } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { Link, SecundaryButton } from "@components/molecules";
import FormInput from "@components/molecules/FormInput";
import { Screen } from "@components/templates/screen";

import { signinValidation } from "@utils/validations";

function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signinValidation),
  });

  const navigation = useNavigation<IRootAuthProps>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const logged = await auth().signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("SignIn", JSON.stringify(logged));
      setIsLoading(true);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Screen lightScreen={true}>
      <Image source={IMAGES.shareThis} style={{ marginBottom: 47 }} />
      <Title isLight={false} text="Login with your credentials" />
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

      <SecundaryButton text="Sign in" onPress={onSubmit} isLoad={isLoading} />
      <Link
        isLight={false}
        onPress={() => navigation.navigate("Forgot", { email: "" })}
        children="Recoverie your password"
      />
    </Screen>
  );
}

export default SignIn;
