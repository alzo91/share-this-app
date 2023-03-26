import { NavigationProp } from "@react-navigation/native";

export type RootAuthParamsList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: { email?: string | null };
  Forgot: { email?: string | null };
};

export type IRootAuthProps = NavigationProp<RootAuthParamsList>;
