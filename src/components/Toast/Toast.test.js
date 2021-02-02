import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import Toast from ".";

describe("Toast", () => {
  it("doesnt render without a toast message", () => {
    const toast = { message: "", type: "success" };
    const useStore = (fn) => fn({ toast });
    renderWithTheme(undefined, <Toast useStore={useStore} />);
    expect(screen.queryByRole("alert")).toBeFalsy();
  });

  it("renders when there's a toast message", async () => {
    const toast = { message: "message", type: "success" };
    const useStore = (fn) => fn({ toast: toast });
    renderWithTheme(undefined, <Toast useStore={useStore} />);
    waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
  });
});
