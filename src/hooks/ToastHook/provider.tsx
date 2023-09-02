import React, { ReactNode, useCallback, useContext, useReducer } from "react";
import { AnimatePresence } from "moti";
import Toast from "@components/atoms/Toast";
import { ToastContext, initialState } from "./context";
import { ToastReducer } from "./reducer";
import { ToastProps } from "./interface";

interface Props {
  children: ReactNode;
}

const ToastProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const showToast = useCallback((props: ToastProps) => {
    dispatch({
      type: "SHOW_TOAST",
      payload: {
        title: props.title,
        text: props.text,
        type: props.type,
        timeout: props.timeout ?? 1500,
        open: true,
      },
    });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR_TOAST", payload: { ...initialState, showToast } });
  }, []);

  return (
    <ToastContext.Provider value={{ ...state, showToast, clear }}>
      {children}
      {state.open && (
        <AnimatePresence>
          <Toast
            open={state.open}
            text={`${state.text}`}
            title={`${state.title}`}
            type={state.type}
            timeout={state.timeout}
            closeAction={clear}
          />
        </AnimatePresence>
      )}
    </ToastContext.Provider>
  );
};

function useToast() {
  const toastContext = useContext(ToastContext);
  if (!toastContext) {
    throw new Error("useToast can't use here");
  }
  return toastContext;
}

export { ToastProvider, useToast };
