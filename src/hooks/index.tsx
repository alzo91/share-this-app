import React from "react";
import { ToastProvider } from "./ToastHook";
import { AuthProvider } from "./AuthHook";

function HookProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}

export default HookProviders;
