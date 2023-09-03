import { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "src/theme";
import { ThemeContext } from "styled-components/native";

type TabIconProps = {
  route: string;
  color: string;
  focused: boolean;
  size: number;
};

export function TabIcon({ route, color, focused, size }: TabIconProps) {
  const iconSize = focused ? 32 : size;
  const iconState = {
    Home: {
      iconName: focused ? "home-circle" : "home-circle-outline",
    },
    MyShares: {
      iconName: focused ? "view-grid" : "view-grid-outline",
    },
    Add: {
      iconName: focused ? "plus-circle" : "plus-circle",
    },
    Notifications: {
      iconName: focused ? "bell-badge" : "bell-outline",
    },
    Profile: {
      iconName: focused ? "account-circle" : "account-circle-outline",
    },
  };

  const stateKeys = Object.keys(iconState);

  if (!stateKeys.includes(route)) {
    return <Icon name="star-outline" color={color} size={iconSize} />;
  }

  if (route === "Add") {
    return (
      <Icon
        name={iconState[route].iconName}
        color={focused ? theme.COLORS.TERTIARY : theme.COLORS.PRIMARY_500}
        size={38}
      />
    );
  }

  return (
    <Icon
      //@ts-ignore
      name={iconState[route].iconName}
      color={color}
      size={iconSize}
    />
  );
}
