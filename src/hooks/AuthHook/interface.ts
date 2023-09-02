import { ToastTypes } from "@hooks/ToastHook/interface";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface LoggingProps {
  email: string;
  password: string;
}

export interface SubscribeProps extends LoggingProps {
  passwordConfirmation: string;
}

export interface LoggedUserProps {
  user?: Object;
  error?: string | null;
}

export interface AuthContextProps {
  isLoading: boolean;
  error: string | undefined;
  subscribe(data: SubscribeProps): Promise<boolean>;
  forgotPassword(data: ForgotPasswordProps): Promise<boolean>;
  logging(data: LoggingProps): Promise<LoggedUserProps>;
  user: UserProps | null;
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
