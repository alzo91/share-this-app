import { IToastTypes } from "@hooks/ToastHook/interface";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface ForgotPassowordProps {
  email: string;
}

export interface LogginProps {
  email: string;
  password: string;
}

export interface SubscribeProps extends LogginProps {
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
  forgotPassword(data: ForgotPassowordProps): Promise<boolean>;
  loggin(data: LogginProps): Promise<LoggedUserProps>;
  user: UserProps | null;
  logout(): Promise<void>;
}

export interface NotifyProps {
  title: string;
  text: string;
  type: IToastTypes;
}

export interface UserProps extends FirebaseAuthTypes.User {
  uuid?: string;
}
