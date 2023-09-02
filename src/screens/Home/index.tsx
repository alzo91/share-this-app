import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Screen } from "@components/templates/screen";
import { Label, Title } from "@components/atoms";
import { SecundaryButton } from "@components/molecules";
import { useAuth } from "@hooks/AuthHook";
import theme from "src/theme";
import { useTheme } from "styled-components/native";
import ExpoConstants from "expo-constants";
import firestore from "@react-native-firebase/firestore";
function Home() {
  const { logout, user } = useAuth();
  const theme = useTheme();

  const split_email = user?.email?.split("@")[0];
  const initials = split_email
    ? (
        split_email.split(".")[0].charAt(0) +
        split_email?.split(".")[1].charAt(0)
      ).toUpperCase()
    : "";

  async function getShares() {
    try {
      console.log("userUuid => ", user?.uid);
      const shares = await firestore()
        .collection("shares")
        .where("share", "array-contains-any", [
          { key: user?.uid, can: "write" },
        ])
        .get({ source: "server" });
      shares.forEach((item) => {
        const currentItem = item.data();
        console.log(item.id, currentItem);
        console.log(item.metadata);
      });
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    getShares();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: theme.COLORS.WHITE,
        justifyContent: "flex-start",
        marginTop: ExpoConstants.statusBarHeight,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", top: 8, margin: 28 }}>
        <TouchableOpacity
          style={{
            height: 57,
            width: 57,
            borderRadius: 15,
            backgroundColor: theme.COLORS.TERTIARY,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={logout}
        >
          <Label text={initials} color={theme.COLORS.WHITE} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 8 }}>
          <Title text={`Fala ai, ${split_email}`} />
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => {
              getShares();
              // firestore()
              //   .collection("shares")
              //   .add({
              //     createdAt: new Date(),
              //     description: "added by app",
              //     name: "Created by app",
              //     executeIn: null,
              //     items: [{ name: "comprar feijão", done: null }],
              //     owner: user?.uid,
              //     share: [{ can: "write", key: user?.uid }],
              //   })
              //   .then((onfulfilled) => getShares());
            }}
          >
            <Label text={"ver minha conta"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
