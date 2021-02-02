import { screen, waitFor, fireEvent, getByText } from "@testing-library/react";
import { renderWithThemeAndRouter } from "testUtils";
import Nav from ".";

const push = jest.fn();
const useHistory = () => ({ push: push });
const logout = jest.fn();
const toggleTheme = jest.fn();
const useStore = (fn) => fn({ toggleTheme, logout });
const changeLanguage = jest.fn();
const useTranslation = () => ({
  t: (str) => str,
  i18n: {
    changeLanguage: changeLanguage,
    language: "en",
  },
});

describe("NavBar", () => {
  it("renders properly", () => {
    renderWithThemeAndRouter(undefined, <Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("redirects to /new dragon when clicking Add Dragon", async () => {
    renderWithThemeAndRouter(undefined, <Nav useHistory={useHistory} />);
    fireEvent.click(screen.getByText("Add Dragon"));
    waitFor(() => expect(push).toHaveBeenCalled());
  });

  it("fires logout from store when clicking logout", async () => {
    renderWithThemeAndRouter(undefined, <Nav useStore={useStore} />);
    fireEvent.click(screen.getByText("Sign Out"));
    waitFor(() => expect(logout).toHaveBeenCalled());
  });

  it("fires changeLanguage from i18n when clicking languageButton", async () => {
    renderWithThemeAndRouter(
      undefined,
      <Nav useTranslation={useTranslation} />
    );
    fireEvent.click(screen.getByLabelText("Change Language"));
    waitFor(() => expect(changeLanguage).toHaveBeenCalled());
  });
});
