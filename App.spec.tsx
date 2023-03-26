import React from "react";
import { render } from "@testing-library/react-native";
import { App } from "./App";

describe("[APP] Testing Jest", () => {
  it("should be able to render app.tsx", () => {
    const screen = render(<App />);
    expect(screen).toBeTruthy();
  });
});
