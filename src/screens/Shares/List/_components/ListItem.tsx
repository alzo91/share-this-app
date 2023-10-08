import React from "react";
import { ImageBackground } from "react-native";

import { IMAGES } from "@assets/index";
import { Label, Title } from "@components/atoms";
import { ShareModel } from "src/models/ShareModel";
import { Bagged, Container, LowerContainer } from "./styles";

export default function ListItem(item: ShareModel & { index: number }) {
  return (
    <Container key={`${item.id}-${item.index}`}>
      <ImageBackground
        resizeMode="cover"
        style={{
          height: 70,
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
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
        <Title text={item.description} fontSize={14} />
        <Label
          fontSize={10}
          text={
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
}
