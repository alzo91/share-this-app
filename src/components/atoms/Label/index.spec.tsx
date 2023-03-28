import React from "react";
import { render } from "@testing-library/react-native";
import { Wrapper } from "tests/mocks/Wrapper";
import Label from "./";

describe("[Components] Testing Label", () => {
  it("should be able to render it", () => {
    const screen = render(<Label text="Testing it" testID="test" />, {
      wrapper: Wrapper,
    });
    expect(screen).toBeTruthy();
  });
});
