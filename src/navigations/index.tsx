import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Auth as AuthNavigation } from "./Auth";

export function Navigations() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
