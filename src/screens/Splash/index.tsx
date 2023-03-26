import { IRootAuthProps } from "@navigations/Auth/types";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export const Splash = () => {
  const navigation = useNavigation<IRootAuthProps>();

  useEffect(() => {
    const timerId = setTimeout(() => navigation.navigate("SignIn"), 750);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Text>Splash Screen</Text>
        <ActivityIndicator size={"large"} />
      </View>
    </View>
  );
};
