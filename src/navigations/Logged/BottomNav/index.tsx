import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/Home";
import { ListShares } from "@screens/Shares/List";

import { TabIcon } from "./TabIcon";
import { Empty as EmptyScreen } from "@screens/Empty";
import theme from "src/theme";

const BottomNavigation = createBottomTabNavigator();

export const BottomNavigator = () => (
  <BottomNavigation.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, focused, size }) => (
        <TabIcon
          color={color}
          route={route.name}
          focused={focused}
          size={size}
        />
      ),
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.COLORS.TERTIARY,
      tabBarInactiveTintColor: "gray",
    })}
  >
    <BottomNavigation.Screen name="Home" component={HomeScreen} />
    <BottomNavigation.Screen name="MyShares" component={ListShares} />
    <BottomNavigation.Screen
      name="Add"
      component={EmptyScreen}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate("NewShares");
        },
      })}
      options={{ title: "" }}
    />
    <BottomNavigation.Screen name="Notifications" component={EmptyScreen} />
    <BottomNavigation.Screen name="Profile" component={EmptyScreen} />
  </BottomNavigation.Navigator>
);
