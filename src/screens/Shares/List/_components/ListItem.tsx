import React from "react";
import { ImageBackground } from "react-native";

import { IMAGES } from "@assets/index";
import { Label } from "@components/atoms";
import { ShareModel } from "src/models/ShareModel";
import { Bagged, Container, LowerContainer, Title, Text } from "./styles";

const ListItem = (item: ShareModel & { index: number }) => (
  <Container key={`${item.id}-${item.index}`}>
    <ImageBackground
      resizeMode="cover"
      style={{
        height: 70,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
      imageStyle={{ borderRadius: 15 }}
      source={
        item.backgroundImage
          ? //@ts-ignore
            IMAGES[item.backgroundImage]
          : IMAGES.backgroundBlue
      }
    >
      <Bagged width={78}>
        <Label text={`${item.items.length} items`} color={"#fff"} />
      </Bagged>
    </ImageBackground>
    <LowerContainer>
      <Title children={item.description} />
      <Text
        children={
          item.createdAt?.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }) ?? "last modified"
        }
      />
    </LowerContainer>
  </Container>
);

export default ListItem;
