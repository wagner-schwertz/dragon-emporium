import { screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "testUtils";
import Pagination from ".";

describe("Pagination", () => {
  it("renders one button when not receiving any prop", () => {
    renderWithTheme(undefined, <Pagination />);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("renders the correct number of buttons", () => {
    renderWithTheme(undefined, <Pagination pages={4} currentPage={1} />);
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });

  it("fires onChange with the target page when clicking on buttons", () => {
    const onChange = jest.fn();
    renderWithTheme(
      undefined,
      <Pagination pages={4} currentPage={1} onChange={onChange} />
    );
    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(onChange).toHaveBeenCalledWith(3);
  });
});
