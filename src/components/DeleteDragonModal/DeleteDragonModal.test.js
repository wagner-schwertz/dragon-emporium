import DeleteDragonModal from ".";
import { renderWithTheme } from "testUtils";
import { screen, fireEvent } from "@testing-library/react";
import themes from "styles/themes";

describe("Delete Dragon Modal Component", () => {
  it("doesn't render without dragonId", () => {
    renderWithTheme("navy", <DeleteDragonModal dragonId={null} />);
    const cancelButton = screen.queryByText("cancel");
    expect(cancelButton).not.toBeInTheDocument();
  });

  it("renders when a dragonId is passed", () => {
    renderWithTheme("navy", <DeleteDragonModal dragonId={10} />);
    const cancelButton = screen.getByText("Delete");
    expect(cancelButton).toBeInTheDocument();
  });

  it("renders a loader when processing request", () => {
    renderWithTheme(
      "navy",
      <DeleteDragonModal dragonId={10} isProcessing={true} />
    );
    expect(screen.getByText("LOADING...")).toBeInTheDocument();
  });

  it("fires onDismiss when cancelling", () => {
    const dismiss = jest.fn();
    renderWithTheme(
      "navy",
      <DeleteDragonModal
        dragonId={10}
        isProcessing={false}
        onDismiss={dismiss}
      />
    );
    fireEvent.click(screen.getByText("Cancel"));
    expect(dismiss).toHaveBeenCalled();
  });
  it("fires onDelete when confirming", () => {
    const onDelete = jest.fn();
    renderWithTheme(
      "navy",
      <DeleteDragonModal
        dragonId={10}
        isProcessing={false}
        onDelete={onDelete}
      />
    );
    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalled();
  });
});
