import { screen } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import EditDragonModal from ".";

describe("Edit Dragon Modal", () => {
  it("doesn't render when data is null", () => {
    renderWithTheme(undefined, <EditDragonModal />);
    expect(screen.queryByRole("heading")).toBeFalsy();
  });

  it("renders when data is passed", () => {
    renderWithTheme(
      undefined,
      <EditDragonModal data={{ name: "dragon", type: "type" }} />
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
