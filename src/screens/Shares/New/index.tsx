import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useForm, useController } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { View as MotiView } from "moti";
import { Label, MaterialCommunityIcon, Title } from "@components/atoms";
import { Page } from "@components/templates/page/";
import { IMAGES, BACKGROUND_IMAGES } from "@assets/index";
import { SecondaryButton } from "@components/molecules";
import {
  Bagged,
  ImageBox,
  ImageContainer,
  Input,
  InputContainer,
  Scroll,
} from "./styles";
import { useAuth } from "@hooks/AuthHook";
import { useToast } from "@hooks/ToastHook/provider";
import SharesService from "@services/shares";
import { yupResolver } from "@hookform/resolvers/yup";
import { addShareValidation } from "@utils/validations";
import { useNavigation } from "@react-navigation/native";
import { IRootAuthProps } from "@navigations/Logged/types";

const imageKeys = Object.keys(BACKGROUND_IMAGES).reverse();

type FormData = {
  title: string;
  description: string;
};

function NewShares(props: any) {
  const [selectedBackground, setSelectedBackground] = useState(imageKeys[0]);
  const [isPrivate, setIsPrivate] = useState(true);
  const theme = useTheme();
  const { user } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<IRootAuthProps>();

  const navigateToAddItems = useCallback(
    () =>
      navigation.navigate("AddItemsToShare", { image_id: selectedBackground }),
    [navigation]
  );

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(addShareValidation),
  });

  const {
    field: titleField,
    formState: { errors: title_errors },
  } = useController({
    control,
    name: "title",
    defaultValue: "",
  });

  const {
    field: descriptionField,
    formState: { errors: descr_errors },
  } = useController({
    control,
    name: "description",
    defaultValue: "",
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("[NewShares].onSubmit", data);

    const userId = user?.uid!;

    try {
      const { uuid } = await new SharesService().getInstance().create({
        backgroundImage: selectedBackground,
        name: data.title,
        description: data.description,
        items: [{ name: "fone ble, moto buds", done: "pending" }],
        owner: userId,
        share: [{ can: "write", key: userId }],
        createdAt: new Date(),
        executedIn: null,
        visibility: isPrivate ? "just-mine" : "public",
      });

      toast.showToast({
        title: "Congrats!",
        text: "List was created successfully",
        type: "success",
        timeout: 2000,
        open: true,
      });
      console.log("[NewShare]", { uuid });
      props.navigation.goBack();
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
      <View style={{ height: 132 }}>
        <ImageBackground
          //@ts-ignore
          source={BACKGROUND_IMAGES[selectedBackground]}
          style={{
            flex: 1,
            padding: 7,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          imageStyle={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <TouchableOpacity onPress={props.navigation.goBack}>
            <MaterialCommunityIcon name="arrow-left" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Scroll>
        <Title text="Edit your list" fontSize={14} />
        <InputContainer error={title_errors?.title ? true : false}>
          <Title text="Title" fontSize={12} />

          <Input
            placeholder={`typing your ${titleField.name} here...`}
            testID={`input-title`}
            onBlur={titleField.onBlur}
            onChangeText={titleField.onChange}
            value={titleField.value}
          />
        </InputContainer>
        <InputContainer error={descr_errors.title ? true : false}>
          <Title text="Description" fontSize={12} />
          <Input
            placeholder={`typing your ${descriptionField.name} here...`}
            testID={`input-description`}
            onBlur={descriptionField.onBlur}
            onChangeText={descriptionField.onChange}
            value={descriptionField.value}
          />
        </InputContainer>
        <InputContainer>
          <Title text="Is it private?" fontSize={12} />
          <View
            style={{
              flexDirection: "row",
              width: 130,
              justifyContent: "space-between",
            }}
          >
            <Bagged
              width={53.2}
              selected={isPrivate === false}
              onPress={() => setIsPrivate(false)}
            >
              <Label
                text=" No "
                color={!isPrivate ? theme.COLORS.WHITE : theme.COLORS.TERTIARY}
              />
            </Bagged>
            <Bagged
              width={53.2}
              selected={isPrivate === true}
              onPress={() => setIsPrivate(true)}
            >
              <Label
                text=" Yes "
                color={isPrivate ? theme.COLORS.WHITE : theme.COLORS.TERTIARY}
              />
            </Bagged>
          </View>
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
        {!isPrivate && (
          <MotiView
            transition={{ type: "timing", scale: { type: "spring" } }}
            from={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <InputContainer>
              <Title text="Find someone to share" fontSize={12} />
              <TouchableOpacity>
                <MaterialCommunityIcon
                  name="account-plus"
                  color={theme.COLORS.PRIMARY_300}
                />
              </TouchableOpacity>
            </InputContainer>
          </MotiView>
        )}
        <InputContainer>
          <Title text="It allow to add some items" fontSize={12} />
          <TouchableOpacity onPress={navigateToAddItems}>
            <MaterialCommunityIcon
              name="plus-circle-outline"
              color={theme.COLORS.PRIMARY_300}
            />
          </TouchableOpacity>
        </InputContainer>
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
