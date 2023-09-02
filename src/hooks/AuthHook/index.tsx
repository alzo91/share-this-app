import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Keyboard } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import {
  AuthContextProps,
  AuthProviderProps,
  ForgotPasswordProps,
  LoggedUserProps,
  LoggingProps,
  NotifyProps,
  SubscribeProps,
  UserProps,
} from "./interface";
import { useToast } from "@hooks/ToastHook/provider";
import { sleep } from "@utils/sleep";

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<UserProps | null>(null);

  const { showToast } = useToast();

  const onAuthStateChanged = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      setUser(user);
    },
    [setUser]
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

  const updateUser = useCallback(async (user: UserProps) => {
    await firestore().collection("users").doc(user.uid).set({
      uuid: user.uid,
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      displayName: user.displayName,
      emailVerified: false,
      isAnonymous: false,
      providerId: user.providerId,
      metada: user.metadata,
    });
  }, []);

  const subscribe = useCallback(
    async (data: SubscribeProps): Promise<boolean> => {
      try {
        setIsLoading(true);
        setError(undefined);
        Keyboard.dismiss();
        const { user } = await auth().createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        await updateUser(user);
        await notify({
          title: "User created",
          text: "The user was successfully created",
          type: "success",
        });
        return true;
      } catch (err) {
        await notify({
          title: "User didn't create.",
          text: "The email address is already in use by another account",
          type: "error",
        });
        setError(JSON.stringify(err));
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const forgotPassword = useCallback(
    async (data: ForgotPasswordProps): Promise<boolean> => {
      try {
        setIsLoading(true);
        setError(undefined);
        Keyboard.dismiss();
        await auth().sendPasswordResetEmail(data.email);
        await notify({
          title: "Forgot your password",
          text: `We sent an email to recovery your account. Please check your email`,
          type: "info",
        });
        return true;
      } catch (err) {
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logging = useCallback(
    async (data: LoggingProps): Promise<LoggedUserProps> => {
      try {
        setIsLoading(true);
        setError(undefined);
        Keyboard.dismiss();
        const logged = await auth().signInWithEmailAndPassword(
          data.email,
          data.password
        );
        await updateUser(logged.user);
        setUser(logged.user);
        return { user: logged.user };
      } catch (err) {
        await notify({
          text: "The password is invalid or the user does not have a password",
          title: "Logging Error",
          type: "error",
        });
        return {
          error: "The password is invalid or the user does not have a password",
        };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    await auth().signOut();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        error,
        isLoading,
        forgotPassword,
        logging,
        subscribe,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth can't use here");
  }
  return authContext;
};

export { AuthContext, AuthProvider, useAuth };
