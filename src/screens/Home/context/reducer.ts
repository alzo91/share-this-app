import { HomeState } from "./interface";

interface HomeContextActions {
  type: "SET_SCREEN_STATUS" | "SET_SHARES" | "SET_CONTACTS";
  payload: any;
}

const actionHandler = (
  payload: any
): { [key: string]: Partial<HomeState> } => ({
  SET_SCREEN_STATUS: { status: payload },
  SET_SHARES: { shares: payload.shares ?? [], status: "already" },
  SET_CONTACTS: { contacts: payload, status: "already" },
});

const HomeReducer = (
  state: HomeState,
  action: HomeContextActions
): HomeState => {
  const updatedProperties = actionHandler(action.payload)[action.type];
  return { ...state, ...updatedProperties };
};

export default HomeReducer;
