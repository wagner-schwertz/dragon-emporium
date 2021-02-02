import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import DragonForm from ".";

describe("DragonForm Component", () => {
  it("renders properly", () => {
    renderWithTheme(undefined, <DragonForm />);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("fires onDismiss when clicking cancel", () => {
    const onDismiss = jest.fn();
    renderWithTheme(undefined, <DragonForm onDismiss={onDismiss} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(onDismiss).toHaveBeenCalled();
  });

  it("doesn't fire onSave when form is unfilled", async () => {
    const onSave = jest.fn();
    renderWithTheme(undefined, <DragonForm onSave={onSave} />);
    fireEvent.click(screen.getByText("Save"));
    const errorMessage = await screen.findByText("Dragon Name is required.");
    expect(onSave).not.toHaveBeenCalled();
    expect(errorMessage).toBeInTheDocument();
  });

  it("doesn't render buttons when isProcessing", () => {
    renderWithTheme(undefined, <DragonForm isProcessing />);
    expect(screen.getByText("LOADING...")).toBeInTheDocument();
    expect();
  });

  it("fire onSave on submit when form is properly filled", async () => {
    const onSave = jest.fn();
    renderWithTheme(undefined, <DragonForm onSave={onSave} />);
    const nameInput = screen.getByLabelText("Name");
    const typeInput = screen.getByLabelText("Type");

    fireEvent.change(nameInput, { target: { value: "dragon-name" } });
    expect(nameInput.value).toBe("dragon-name");
    fireEvent.change(typeInput, { target: { value: "dragon-type" } });
    expect(typeInput.value).toBe("dragon-type");
    fireEvent.click(screen.getByText("Save"));
    await waitFor(() => expect(onSave).toHaveBeenCalled());
  });
});
