import { createContext } from "react";
import { ToastState } from "./interface";

const initialState: ToastState = {
  text: undefined,
  title: undefined,
  timeout: 750,
  type: "info",
  open: false,
  showToast: (props) => Promise.resolve(props),
  clear: () => Promise.resolve(),
};

const ToastContext = createContext(initialState);

export { ToastContext, initialState };
