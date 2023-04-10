import { render } from "@testing-library/react-native";
import SignIn from "./";
import { Wrapper } from "tests/mocks/Wrapper";

jest.useFakeTimers({});

describe(`[Screen | SignIn]`, () => {
  it("should be able to check elements", () => {
    const screen = render(<SignIn />, { wrapper: Wrapper });

    const logo = screen.getByTestId("logo");
    const title = screen.getByTestId("title-text-login");
    const email = screen.getByTestId("input-email");

    const password = screen.getByTestId("input-password");
    const loginButton = screen.getByTestId("button-login");

    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
});
