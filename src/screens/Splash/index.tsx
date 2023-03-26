import { IRootAuthProps } from "@navigations/Auth/types";
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
import { Title, Spinner, LightLabel } from "@components/atoms";
import { IMAGES } from "@assets/index";
import { Link } from "@components/molecules";

const Splash = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const navigation = useNavigation<IRootAuthProps>();

  function goToSignUp() {
    navigation.navigate("SignIn");
  }

  if (!fontsLoaded)
    return (
      <Screen lightScreen={false}>
        <Title isLight={true} text="Loading app informations" />
        <Spinner />
      </Screen>
    );

  return (
    <Screen lightScreen={false}>
      <Title isLight={true} text="ShareThis" />
      <LightLabel text="List, Share, Complete your shared activities" />
      <Image
        source={IMAGES.splash}
        alt="Splash screen image"
        resizeMode="contain"
      />
      <Link onPress={goToSignUp}>Subscribe here</Link>
    </Screen>
  );
};

export default Splash;
