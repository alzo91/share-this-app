import { AuthContextProps } from "./interface";

interface AuthActions {
  type: "SET_LOADING" | "SET_ERROR" | "SET_USER";
  payload: any;
}

const actionHandler = (
  payload: any
): { [key: string]: Partial<AuthContextProps> } => ({
  SET_LOADING: { isLoading: payload.isLoading, error: payload.error ?? "" },
  SET_ERROR: { error: payload.error ?? "", isLoading: false },
  SET_USER: { user: payload.user ?? null, isLoading: false },
});

function AuthReducer(
  state: AuthContextProps,
  action: AuthActions
): AuthContextProps {
  const updateAuth = actionHandler(action.payload)[action.type];
  return { ...state, ...updateAuth };
}

export { AuthReducer, AuthActions };
