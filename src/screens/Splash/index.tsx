import React from "react";
import { Image } from "react-native";
import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";

import { IMAGES } from "@assets/index";
import { Screen } from "@components/templates/screen";
import { Title, Label } from "@components/atoms";
import { Link, PrimaryButton } from "@components/molecules";

function Splash() {
  const navigation = useNavigation<IRootAuthProps>();

  return (
    <Screen lightScreen={false}>
      <Title isLight={true} text="ShareThis" testID="mainTitle" />
      <Label
        isLight={true}
        text="List, Share, Complete your shared activities"
        testID="title-description"
      />
      <Image
        style={{ width: 300, height: 400 }} // 339 x486
        source={IMAGES.splash}
        alt="Splash screen image"
        resizeMode="contain"
        testID="splash-image"
      />

      <PrimaryButton
        text="Sign in"
        onPress={() => navigation.navigate("SignIn")}
        iconName="login"
        testID="login"
      />
      <Link
        testID="subscribe"
        isLight={true}
        onPress={() => navigation.navigate("SignUp", { email: undefined })}
      >
        Subscribe here
      </Link>
    </Screen>
  );
}

export default Splash;
