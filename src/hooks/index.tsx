import React from "react";
import { ToastProvider } from "./ToastHook";

function HookProviders({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}

export default HookProviders;
