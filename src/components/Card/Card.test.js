import Card from ".";
import { renderWithTheme } from "testUtils";
import { screen } from "@testing-library/react";
import themes from "styles/themes";

describe("Card Component", () => {
  it("Renders with title", () => {
    renderWithTheme("navy", <Card title="card title" />);
    expect(screen.getByRole("heading")).toHaveTextContent("card title");
  });

  it("Renders without title", () => {
    renderWithTheme("navy", <Card>card body</Card>);
    expect(screen.getByText("card body")).toBeInTheDocument();
  });
});
