import { IRootAuthProps, RootAuthParamsList } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Screen } from "@components/templates/screen";
import { Title, Spinner, Label } from "@components/atoms";
import { IMAGES } from "@assets/index";
import { Link, PrimaryButton } from "@components/molecules";

const Splash = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const navigation = useNavigation<IRootAuthProps>();

  return (
    <Screen lightScreen={false}>
      <Title isLight={true} text="ShareThis" />
      <Label
        isLight={true}
        text="List, Share, Complete your shared activities"
      />
      <Image
        style={{ width: 300, height: 400 }} // 339 x486
        source={IMAGES.splash}
        alt="Splash screen image"
        resizeMode="contain"
      />
      {fontsLoaded ? (
        <>
          <PrimaryButton
            text="Sign in"
            onPress={() => navigation.navigate("SignIn")}
          />
          <Link
            isLight={true}
            onPress={() => navigation.navigate("SignUp", { email: undefined })}
          >
            Subscribe here
          </Link>
        </>
      ) : (
        <>
          <Title isLight={true} text="Loading app informations" />
          <Spinner />
        </>
      )}
    </Screen>
  );
};

export default Splash;
