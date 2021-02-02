import { screen } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import Field from ".";

describe("Field Component", () => {
  it("renders properly with label and error", () => {
    renderWithTheme(
      undefined,
      <Field label="dragon-label" error="dragon-error" id="dragon" />
    );
    expect(screen.getByLabelText("dragon-label")).toBeInTheDocument();
    expect(screen.getByText("dragon-error")).toBeInTheDocument();
  });
});
