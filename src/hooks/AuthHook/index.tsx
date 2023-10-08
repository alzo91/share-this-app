import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Alert, Keyboard } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { useToast } from "@hooks/ToastHook/provider";
import { sleep } from "@utils/sleep";
import {
  SubscribeProps,
  ForgotPasswordProps,
  LoggedUserProps,
  LoggingProps,
} from "src/models/Login";

import { AuthContext, authInitialState } from "./context";
import { AuthReducer } from "./reducer";
import { AuthProviderProps, NotifyProps } from "./interface";
import { User } from "src/models/User";
import UserService from "@services/user/";

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  const { showToast } = useToast();
  // const UserServices = useMemo(() => new UserFirebase(), []);
  const UserServices = useMemo(() => new UserService().getInstance(), []);

  const onAuthStateChanged = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      if (!user) return;
      setUser({
        uuid: user.uid,
        uid: user.uid,
        email: user.email!,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        providerId: user.providerId,
        metadata: {
          creation: user.metadata.creationTime,
          lastSign: user.metadata.lastSignInTime,
        },
      });
    },
    []
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const notify = useCallback(
    async (params: NotifyProps) => {
      showToast({
        title: params.title,
        text: params.text,
        timeout: 2250,
        type: params.type,
        open: true,
      });
      await sleep(2500);
    },
    [showToast]
  );

  const setLoading = useCallback((isLoading: boolean, error?: string) => {
    dispatch({ type: "SET_LOADING", payload: { isLoading, error } });
  }, []);

  const setUser = useCallback((user?: User | null) => {
    dispatch({ type: "SET_USER", payload: { user: user } });
  }, []);

  const subscribe = useCallback(
    async (data: SubscribeProps): Promise<boolean> => {
      try {
        setLoading(true, undefined);
        Keyboard.dismiss();

        const user = await UserServices.create({ ...data });

        await notify({
          title: "User created",
          text: `${user.email} successfully`,
          type: "success",
        });

        setLoading(false, undefined);
        setUser(user);
        return true;
      } catch (err) {
        console.error(err);
        await notify({
          title: "User didn't create.",
          text: "The email address is already in use by another account",
          type: "error",
        });

        setLoading(false, JSON.stringify(err));
        return false;
      }
    },
    []
  );

  const forgotPassword = useCallback(
    async (data: ForgotPasswordProps): Promise<boolean> => {
      try {
        setLoading(true, undefined);
        Keyboard.dismiss();
        await UserServices.recovery({ email: data.email });
        await notify({
          title: "Forgot your password",
          text: `We sent an email to recovery your account. Please check your email`,
          type: "info",
        });
        setLoading(false, undefined);
        return true;
      } catch (err) {
        console.error(err);
        const message =
          "An error ocurred when you tried to recovery your password";
        setLoading(false, message);
        return false;
      }
    },
    []
  );

  const logging = useCallback(
    async (data: LoggingProps): Promise<LoggedUserProps> => {
      try {
        setLoading(true, undefined);
        Keyboard.dismiss();
        const user = await UserServices.logging({ ...data });
        setUser(user);
        return { user };
      } catch (err) {
        console.error(err);
        const message = "The user / password is invalid";
        await notify({
          text: message,
          title: "Logging Error",
          type: "error",
        });
        setLoading(false, message);
        return { error: message };
      }
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      Alert.alert("Share It", "Would you like to exit the app?", [
        {
          isPreferred: true,
          text: "Cancel",
        },
        {
          text: "Exit",
          isPreferred: false,
          onPress: async () => {
            await UserServices.logout();
            setUser(null);
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        subscribe,
        logging,
        forgotPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth can't use here");
  }
  return authContext;
};

export { AuthContext, AuthProvider, useAuth };
