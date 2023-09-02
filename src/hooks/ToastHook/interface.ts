type ToastTypes = "warning" | "error" | "success" | "info";

type ToastProps = {
  title?: string;
  text?: string;
  type: ToastTypes;
  timeout?: number;
  open: boolean;
};

type ToastState = ToastProps & {
  showToast: (props: ToastProps) => void;
  clear: () => void;
};

export { ToastTypes, ToastState, ToastProps };
