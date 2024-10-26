import { NavigationProp } from "@react-navigation/native";

type RootLoggedParamsList = {
  InitialApp: undefined;
  NewShares: undefined;
  AddItemsToShare: {image_id?: string, id?: string}
  EditShare: {id: string}
};

type IRootAuthProps = NavigationProp<RootLoggedParamsList>;

export default RootLoggedParamsList;

export { IRootAuthProps };
