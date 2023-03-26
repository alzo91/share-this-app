import { IMAGES } from "@assets/index";
import { Title } from "@components/atoms";
import { Link, SecundaryButton } from "@components/molecules";
import { Screen } from "@components/templates/screen";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";

const SignIn = () => {
  const navigation = useNavigation<IRootAuthProps>();
  function handleSignIn() {
    console.log("handleSignIn");
  }
  return (
    <Screen lightScreen={true}>
      <Image source={IMAGES.shareThis} style={{ marginBottom: 47 }} />
      <Title isLight={false} text="Login with your credentials" />
      <SecundaryButton text="Sign in" onPress={handleSignIn} />
      <Link
        isLight={false}
        onPress={() => navigation.navigate("Forgot", { email: "" })}
        children="Recoverie your password"
      />
    </Screen>
  );
};

export default SignIn;
