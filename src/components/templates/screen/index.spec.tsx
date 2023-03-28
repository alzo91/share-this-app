import React from "react";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";

import { Wrapper } from "tests/mocks/Wrapper";
import { Screen } from "./";

describe("[Components] Testing Screen", () => {
  it("should be able to render it", () => {
    render(<Screen lightScreen={false} children={<View />} />, {
      wrapper: Wrapper,
    });
    expect(screen).toBeTruthy();
  });
});
