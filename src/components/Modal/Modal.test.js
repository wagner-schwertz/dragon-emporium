import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import Modal from ".";

describe("Modal", () => {
  it("doesn't render when show isn't true", () => {
    renderWithTheme(
      undefined,
      <Modal show={false}>
        <button>button</button>
      </Modal>
    );
    expect(screen.queryByRole("button")).toBeFalsy();
  });

  it("renders when show is truthy", () => {
    renderWithTheme(
      undefined,
      <Modal show={"yes"}>
        <button>button</button>
      </Modal>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays the dark overlay", async () => {
    renderWithTheme(
      undefined,
      <Modal show={"yes"}>
        <button>button</button>
      </Modal>
    );
    await waitFor(() =>
      expect(screen.getByTestId("modal-overlay")).toHaveStyle(
        "background-color: rgba(0, 0, 0, 0.6)"
      )
    );
  });
});
