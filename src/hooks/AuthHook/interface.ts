import { ToastTypes } from "@hooks/ToastHook/interface";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import {
  ForgotPasswordProps,
  LoggedUserProps,
  LoggingProps,
  SubscribeProps,
} from "src/models/Login";
import { User } from "src/models/User";

export interface AuthProviderProps {
  children: React.ReactNode;
}
export interface AuthContextProps {
  isLoading: boolean;
  error: string | undefined;
  subscribe(data: SubscribeProps): Promise<boolean>;
  forgotPassword(data: ForgotPasswordProps): Promise<boolean>;
  logging(data: LoggingProps): Promise<LoggedUserProps>;
  user: User | null;
  logout(): Promise<void>;
}

export interface NotifyProps {
  title: string;
  text: string;
  type: ToastTypes;
}

export interface UserProps extends FirebaseAuthTypes.User {
  uuid?: string;
}
