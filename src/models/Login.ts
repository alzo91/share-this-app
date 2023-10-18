export interface LoggingProps {
  email: string;
  password: string;
}

export interface SubscribeProps extends LoggingProps {
  passwordConfirmation: string;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface LoggedUserProps {
  user?: Object;
  error?: string | null;
}
