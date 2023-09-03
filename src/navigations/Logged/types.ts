import { NavigationProp } from "@react-navigation/native";

export type RootLoggedParamsList = {
  InitialApp: undefined;
  NewShares: undefined;
};

export type IRootAuthProps = NavigationProp<RootLoggedParamsList>;
