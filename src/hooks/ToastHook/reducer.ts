import { ToastState } from "./interface";

export interface ToastActions {
  type: "SHOW_TOAST" | "CLEAR_TOAST";
  payload: any;
}

const ToastReducer = (state: ToastState, action: ToastActions): ToastState => {
  switch (action.type) {
    case "CLEAR_TOAST":
      return {
        ...state,
        open: false,
        text: undefined,
        timeout: 1000,
        title: "",
        type: "info",
      };

    case "SHOW_TOAST":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { ToastReducer };
