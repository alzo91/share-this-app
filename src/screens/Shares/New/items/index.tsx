import { Title } from "@components/atoms";
import { Screen } from "@components/templates/screen";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

type NewItemsProps = PropsWithChildren;

function NewItems(props: NewItemsProps) {
  return (
    <Screen lightScreen>
      <View>
        <Title text="Add some items" />
      </View>
    </Screen>
  );
}

export default NewItems;
