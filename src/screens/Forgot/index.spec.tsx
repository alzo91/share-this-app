import { render } from "@testing-library/react-native";
import Forgot from "./";
import { Wrapper } from "tests/mocks/Wrapper";

jest.useFakeTimers({});

describe(`[Screen | Forgot]`, () => {
  it("should be able to check elements", () => {
    const screen = render(<Forgot />, { wrapper: Wrapper });

    const logo = screen.getByTestId("logo");
    const title = screen.getByTestId("title-text-forgot");
    const email = screen.getByTestId("input-email");
    const loginButton = screen.getByTestId("button-recovery");

    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
    expect(email).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
});
