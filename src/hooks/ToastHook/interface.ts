type IToastTypes = "warning" | "error" | "sucess" | "info" | undefined;

interface IShowToastProps {
  title: string;
  text: string;
  type: IToastTypes;
  timeout?: number;
}

interface IToastContextData {
  showToast(props: IShowToastProps): void;
}

export { IToastTypes, IShowToastProps, IToastContextData };
