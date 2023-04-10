import { render } from "@testing-library/react-native";
import SplashScreen from "./";
import { Wrapper } from "tests/mocks/Wrapper";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
describe(`[Screen | Splash]`, () => {
  it("should be able to check elements", () => {
    const screen = render(<SplashScreen />, { wrapper: Wrapper });
    const title = screen.getByTestId("title-text-mainTitle");
    const titleLabe = screen.getByTestId("label-title-description");
    const image = screen.getByTestId("splash-image");
    const loginButton = screen.getByTestId("button-login");
    const subscribeButton = screen.getByTestId("link-container-subscribe");

    expect(title).toBeTruthy();
    expect(titleLabe).toBeTruthy();
    expect(image).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(subscribeButton).toBeTruthy();
  });
});
