import React, { useState } from "react";
import { ImageBackground, View, FlatList } from "react-native";
import { useForm, useController } from "react-hook-form";
import { useTheme } from "styled-components/native";
import firestore from "@react-native-firebase/firestore";
import { Title } from "@components/atoms";
import { Page } from "@components/templates/page/";
import { IMAGES, BACKGROUND_IMAGES } from "@assets/index";
import { SecondaryButton } from "@components/molecules";
import {
  ImageBox,
  ImageContainer,
  Input,
  InputContainer,
  Scroll,
} from "./styles";
import { ShareModel } from "src/models/ShareModel";
import { useAuth } from "@hooks/AuthHook";
import { useToast } from "@hooks/ToastHook/provider";

const imageKeys = Object.keys(BACKGROUND_IMAGES).reverse();

type FormData = {
  title: string;
  description: string;
};

function NewShares() {
  const [selectedBackground, setSelectedBackground] = useState(imageKeys[0]);
  const theme = useTheme();
  const { user } = useAuth();
  const toast = useToast();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { field: titleField } = useController({
    control,
    name: "title",
    defaultValue: "",
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("[NewShares]", data);
    const userId = user?.uid!;
    const shareData: ShareModel = {
      backgroundImage: selectedBackground,
      name: data.title,
      description: `descr.: ${data.title} `,
      items: [{ name: "fone ble, moto buds", done: "pending" }],
      owner: userId,
      share: [{ can: "write", key: userId }],
      createdAt: new Date(),
      executedIn: null,
    };
    try {
      const createdList = await firestore().collection("shares").add(shareData);
      toast.showToast({
        title: "Congrats!",
        text: "List was created successfully",
        type: "success",
        timeout: 2000,
        open: true,
      });
      console.log("[NewShare]", createdList);
    } catch (error) {
      toast.showToast({
        title: "Try again",
        text: "Something is wrong, try again please",
        type: "error",
        timeout: 1500,
        open: true,
      });
    }
  });

  return (
    <Page>
      <View style={{ backgroundColor: theme.COLORS.INFO_DARK, height: 173 }}>
        <ImageBackground
          //@ts-ignore
          source={BACKGROUND_IMAGES[selectedBackground]}
          style={{ flex: 1 }}
        >
          <Title text="New Share" />
        </ImageBackground>
      </View>
      <Scroll>
        <Title text="Edit your list" fontSize={14} />
        <InputContainer>
          <Title text="Title" fontSize={12} />

          <Input
            placeholder={`typing your ${titleField.name} here...`}
            testID={`input-title`}
            onBlur={titleField.onBlur}
            onChangeText={titleField.onChange}
            value={titleField.value}
          />
        </InputContainer>
        <Title text="Background image" fontSize={14} />
        <FlatList
          data={imageKeys}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ImageContainer
              selected={item === selectedBackground}
              onPress={() => setSelectedBackground(item)}
            >
              <ImageBackground
                //@ts-ignore
                source={IMAGES[item]}
                style={{ borderRadius: 15 }}
              >
                <ImageBox />
              </ImageBackground>
            </ImageContainer>
          )}
        />
      </Scroll>
      <SecondaryButton
        text="Save"
        iconName="send"
        iconSize={18}
        onPress={onSubmit}
      />
    </Page>
  );
}

export default NewShares;
