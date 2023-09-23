import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

import firestore from "@react-native-firebase/firestore";

import { HomeContext, initialState } from "./context";
import HomeReducer from "./reducer";
import { useAuth } from "@hooks/AuthHook";
import { ShareModel } from "src/models/ShareModel";

interface Props {
  children: ReactNode;
}

const HomeProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  const SHARE_COLLECTION = "shares";

  const { user } = useAuth();

  const log = useCallback(
    (message: any) => console.log("HomeProvider", message),
    []
  );

  const getShares = useCallback(async () => {
    dispatch({ type: "SET_SCREEN_STATUS", payload: "loading" });

    try {
      log(`userUuid => ${user?.uid}`);

      const shares = await firestore()
        .collection(SHARE_COLLECTION)
        .where("share", "array-contains-any", [
          { key: user?.uid, can: "write" },
        ])
        .orderBy("createdAt", "desc")
        .limit(3)
        .get({ source: "server" });

      const shareList: ShareModel[] = [];
      shares.forEach((item) => {
        const currentItem = item.data() as ShareModel;
        /** console.log(item.id, currentItem); console.log(item.metadata); */

        shareList.push({
          ...currentItem,
          id: item.id,
          //@ts-ignore
          createdAt: currentItem.createdAt?.toDate(),
        });
      });
      dispatch({ type: "SET_SHARES", payload: shareList });
    } catch (error) {
      console.warn("HomeProvider", error);
      dispatch({ type: "SET_SCREEN_STATUS", payload: "error" });
    }
  }, []);

  useEffect(() => {
    getShares();
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
