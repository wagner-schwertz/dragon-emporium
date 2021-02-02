import { screen } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import Loader from ".";

describe("Loader", () => {
  it("renders properly", () => {
    renderWithTheme(undefined, <Loader />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
