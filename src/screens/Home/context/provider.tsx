import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { HomeContext, initialState } from "./context";
import HomeReducer from "./reducer";
import { useAuth } from "@hooks/AuthHook";

import SharesService from "@services/shares";

interface Props {
  children: ReactNode;
}

const HomeProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  const { user } = useAuth();

  const sharesService = useMemo(() => new SharesService().getInstance(), []);

  const getShares = useCallback(async () => {
    dispatch({ type: "SET_SCREEN_STATUS", payload: "loading" });

    try {
      console.log(user?.uid);
      if (!user?.uid) {
        dispatch({ type: "SET_SCREEN_STATUS", payload: "already" });
        return;
      }

      const shares = await sharesService.getTheLatest({
        userUuid: user!.uid!,
        limit: 3,
      });

      dispatch({ type: "SET_SHARES", payload: { shares } });
    } catch (error) {
      console.warn("HomeProvider", error);
      dispatch({ type: "SET_SCREEN_STATUS", payload: "error" });
    }
  }, []);

  return (
    <HomeContext.Provider value={{ ...state, getShares }}>
      {children}
    </HomeContext.Provider>
  );
};

function useHome() {
  const homeContext = useContext(HomeContext);
  if (!homeContext) {
    throw new Error("HomeContext can't use here");
  }
  return homeContext;
}

export { HomeProvider, useHome };
