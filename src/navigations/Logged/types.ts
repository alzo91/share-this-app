import { NavigationProp } from "@react-navigation/native";

type RootLoggedParamsList = {
  InitialApp: undefined;
  NewShares: undefined;
};

type IRootAuthProps = NavigationProp<RootLoggedParamsList>;

export default RootLoggedParamsList;

export { IRootAuthProps };
