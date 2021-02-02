import { screen, fireEvent } from "@testing-library/react";
import { renderWithThemeAndRouter } from "testUtils";
import List from ".";

describe("List Component", () => {
  const data = [
    { id: "1", name: "dragon1" },
    { id: "2", name: "dragon2" },
    { id: "3", name: "dragon3" },
  ];
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  it("renders the correct number of entries", () => {
    renderWithThemeAndRouter(
      undefined,
      <List data={data} onDelete={onDelete} onEdit={onEdit} />
    );
    expect(screen.queryAllByRole("listitem")).toHaveLength(3);
  });

  it("renders the correct number of buttons", () => {
    renderWithThemeAndRouter(
      undefined,
      <List data={data} onDelete={onDelete} onEdit={onEdit} />
    );
    expect(screen.queryAllByRole("button")).toHaveLength(6);
  });

  it("fires onEdit with the right argument", () => {
    renderWithThemeAndRouter(
      undefined,
      <List data={data} onDelete={onDelete} onEdit={onEdit} />
    );
    fireEvent.click(screen.getByLabelText("Edit Dragon #2"));
    expect(onEdit).toHaveBeenCalledWith("2");
  });

  it("fires onDelete with the right argument", () => {
    renderWithThemeAndRouter(
      undefined,
      <List data={data} onDelete={onDelete} onEdit={onEdit} />
    );
    fireEvent.click(screen.getByLabelText("Delete Dragon #3"));
    expect(onDelete).toHaveBeenCalledWith("3");
  });

  it("renders a message when data isn't passad", () => {
    renderWithThemeAndRouter(undefined, <List />);
    expect(screen.getByText("There are no dragons ):")).toBeInTheDocument();
  });
});
