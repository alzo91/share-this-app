import { createContext } from "react";
import { HomeState } from "./interface";

const initialState: HomeState = {
  status: "loading",
  shares: [],
  contacts: [],
  getShares: () => Promise.resolve(),
};

const HomeContext = createContext(initialState);

export { HomeContext, initialState };
