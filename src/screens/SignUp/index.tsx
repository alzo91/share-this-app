import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { Screen } from "@components/templates/screen";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";

const SignUp = () => {
  const navigation = useNavigation<IRootAuthProps>();

  function handleSignUp() {
    console.log("handleSignIn");
    setTimeout(() => navigation.navigate("SignIn"), 550);
  }
  return (
    <Screen lightScreen={true}>
      <Image source={IMAGES.shareThis} style={{ marginBottom: 47 }} />
      <Title isLight={false} text="Fill in your information" />
      <SecundaryButton text="Subscribe" onPress={handleSignUp} />
    </Screen>
  );
};

export default SignUp;
