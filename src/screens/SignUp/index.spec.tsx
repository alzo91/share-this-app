import { render } from "@testing-library/react-native";
import SignUp from "./";
import { Wrapper } from "tests/mocks/Wrapper";

jest.useFakeTimers({});

describe(`[Screen | SignUp]`, () => {
  it("should be able to check elements", () => {
    const screen = render(<SignUp />, { wrapper: Wrapper });

    const logo = screen.getByTestId("logo");
    const title = screen.getByTestId("title-text-signup");
    const email = screen.getByTestId("input-email");

    const password = screen.getByTestId("input-password");
    const passwordConfirmation = screen.getByTestId(
      "input-passwordConfirmation"
    );

    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(passwordConfirmation).toBeTruthy();
  });
});
