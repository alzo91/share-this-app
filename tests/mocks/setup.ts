import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import "react-native-gesture-handler/jestSetup";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: (name: string) => jest.fn(),
  }),
  goBack: jest.fn(),
}));

jest.mock("@react-native-firebase/auth", () => ({
  onAuthStateChanged: (callback: Function) => callback(),
  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.UserCredential> => {
    //@ts-ignore
    return { user: { uid: "uid-test" } };
  },
  sendPasswordResetEmail: (email: string) => {},
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ): Promise<FirebaseAuthTypes.UserCredential> => {
    //@ts-ignore
    return { user: { uid: "uid-test" } };
  },
  signOut: jest.fn(),
}));

jest.mock("@react-native-firebase/firestore", () => ({
  collection: (collectionName: string) => ({
    doc: (uuid: string) => ({ set: (object: Object) => jest.fn() }),
  }),
}));
