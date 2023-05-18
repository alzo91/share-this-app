import React from "react";
import { View } from "react-native";
import { Screen } from "@components/templates/screen";
import { Label } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { useAuth } from "@hooks/AuthHook";
import theme from "src/theme";

function Home() {
  const { logout, user } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.INFO_LIGHT,
        paddingVertical: 10,
      }}
    >
      <View
        style={{ flexDirection: "row", backgroundColor: "yellow", height: 35 }}
      >
        <Label
          text={`Olá,${user?.displayName ?? ""} Seja bem-vindo`}
          color={theme.COLORS.TERTIARY}
        />
      </View>
      <Label text="Home Screen" />
      <SecundaryButton
        text="Logout"
        iconName="logout"
        iconSize={14}
        onPress={logout}
      />
    </View>
  );
}

export default Home;
