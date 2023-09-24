import React from "react";
import { View, FlatList, ScrollView, RefreshControl } from "react-native";

import { useAuth } from "@hooks/AuthHook";
import { Title } from "@components/atoms";
import { Page } from "@components/templates/page";
import { HomeHeader, Notices, SquareBox } from "@components/molecules";
import { HomeProvider, useHome } from "./context/provider";

import { ShareModel } from "src/models/ShareModel";

import { useTheme } from "styled-components/native";
import ListItem from "./_components/ListItem";

import SquareSkeleton from "./_components/SquareSkeleton";
import ListItemSkeleton from "./_components/ListItemSkeleton";

function HomeScreen() {
  const theme = useTheme();
  const { logout, user } = useAuth();
  const { shares, status, getShares } = useHome();
  const split_email = user?.email?.split("@")[0];
  /** const initials = split_email ? split_email.charAt(0).toUpperCase() : ""; */
  console.log("HomeScreen", { status, length: shares.length });

  return (
    <Page>
      <HomeHeader
        leftOnPress={() => {
          console.log("leftOnPress");
        }}
        rightOnPress={logout}
        leftSizeIcon={24}
        rightSizeIcon={22}
        title={`Hello, ${split_email}`}
        subTitle={"see your account"}
      />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={status === "loading"}
            onRefresh={() => getShares()}
          />
        }
      >
        <View style={{ padding: 14 }}>
          <Title text="See your last list" />
          {status === "loading" && <ListItemSkeleton />}
          <FlatList<ShareModel>
            keyExtractor={(item) => item.id}
            data={shares}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) => (
              <ListItem
                id={item.id}
                key={item.id}
                createdAt={item.createdAt!}
                description={item.description}
                quantity={item.items.length}
                textColor={theme.COLORS.BACKGROUND}
                backgroundImage={item.backgroundImage}
              />
            )}
          />

          <Notices backgroundColor={theme.COLORS.SECONDARY_500} />
          <Title text="Your last contacts" />
          {status === "loading" ? (
            <SquareSkeleton />
          ) : (
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <SquareBox title="MZ" text="Mãe Zotarelli" />
              <SquareBox title="AO" text="Alisson Zotarelli" />
              <SquareBox title="APO" text="Ana Paula Zotarelli" />
              <SquareBox title="AC" text="Artur Cupelli" />
            </View>
          )}
        </View>
      </ScrollView>
    </Page>
  );
}

function Home() {
  return (
    <HomeProvider>
      <HomeScreen />
    </HomeProvider>
  );
}

export default Home;
