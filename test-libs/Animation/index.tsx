import React, { useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { View, Button } from "react-native";

export function Animation() {
  const randomWidth = useSharedValue(10);
  const backgroundColor = useSharedValue("green");

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          {
            width: 100,
            height: 80,
            margin: 30,
          },
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          backgroundColor.value = "blue";
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}
