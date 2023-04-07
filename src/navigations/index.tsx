import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./Auth";
import LoggedNavigation from "./Logged";
import { useAuth } from "@hooks/AuthHook";

function Navigations() {
  const { user } = useAuth();
  if (user === null)
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <LoggedNavigation />
    </NavigationContainer>
  );
}

export default Navigations;
