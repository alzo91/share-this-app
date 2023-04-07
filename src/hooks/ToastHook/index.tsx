import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence } from "moti";

import { IToastContextData, IToastTypes, IShowToastProps } from "./interface";
import Toast from "@components/atoms/Toast";

const ToastContext = createContext({} as IToastContextData);

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<IToastTypes>(undefined);
  const [timer, setTimer] = useState<number>(2000);

  useEffect(() => {
    if (!show) return;
    const timerId = setTimeout(() => setShow(false), timer);
    return () => clearTimeout(timerId);
  }, [show, timer]);

  const showToast = (toastProps: IShowToastProps) => {
    const { text: descr, title: _title, type: _type, timeout } = toastProps;
    setText(descr);
    setTitle(_title);
    setType(_type);
    setShow(true);
    setTimer(!timeout ? 2000 : timeout);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {show && (
        <AnimatePresence>
          <Toast
            title={title}
            text={text}
            type={type}
            isVisible={show}
            timeout={timer}
            setVisible={setShow}
          />
        </AnimatePresence>
      )}
    </ToastContext.Provider>
  );
};

function useToast() {
  const toatContext = useContext(ToastContext);
  if (!toatContext) {
    throw new Error("useToast can't use here");
  }
  return toatContext;
}

export { ToastContext, ToastProvider, useToast };
