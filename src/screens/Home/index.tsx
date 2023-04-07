import React from "react";

import { Screen } from "@components/templates/screen";
import { Label } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { useAuth } from "@hooks/AuthHook";

function Home() {
  const { logout } = useAuth();

  return (
    <Screen lightScreen={true}>
      <Label text="Home Screen" />
      <SecundaryButton
        text="Logout"
        iconName="logout"
        iconSize={14}
        onPress={logout}
      />
    </Screen>
  );
}

export default Home;
