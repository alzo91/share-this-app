import { ToastProps, ToastTypes } from "@hooks/ToastHook/interface";
import { IContainerProps } from "./style";

export type StatusProps = {
  [K in ToastTypes]: {
    background: string;
    text: string;
  };
};

export type ToastComponentProps = IContainerProps &
  ToastProps & {
    closeAction: Function;
  };
