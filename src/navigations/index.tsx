import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "src/navigations/Auth";

const Navigations = () => (
  <NavigationContainer>
    <AuthNavigation />
  </NavigationContainer>
);

export default Navigations;
