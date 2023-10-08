import { createContext } from "react";
import { AuthContextProps } from "./interface";

const authInitialState: AuthContextProps = {
  subscribe: (_props) => Promise.resolve(true),
  logging: (_param) => Promise.resolve({ error: undefined, user: undefined }),
  forgotPassword: (_params) => Promise.resolve(true),
  logout: () => Promise.resolve(),
  error: undefined,
  isLoading: false,
  user: null,
};

const AuthContext = createContext(authInitialState);

export { AuthContext, authInitialState };
