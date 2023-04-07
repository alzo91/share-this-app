import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./Auth";

function Navigations() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

export default Navigations;
