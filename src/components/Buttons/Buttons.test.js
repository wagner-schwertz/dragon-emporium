import { screen } from "@testing-library/react";
import { Button } from ".";
import { IconButton } from ".";
import { LanguageButton } from ".";
import { ThemeButton } from ".";
import themes from "styles/themes";
import { lighten } from "polished";
import { renderWithTheme } from "testUtils";

describe("Buttons", () => {
  it("renders without errors", () => {
    renderWithTheme("navy", <Button>Primary Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the style of the primary theme", () => {
    renderWithTheme("navy", <Button>Primary Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`
    color: ${lighten(0.6, themes["navy"].colors.primary)}
    `);
  });

  it("renders the style of the secondary theme", () => {
    renderWithTheme("violet", <Button>Primary Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`
    color: ${lighten(0.6, themes["violet"].colors.primary)}
    `);
  });

  it("renders IconButtons properly", () => {
    renderWithTheme("navy", <IconButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders LanguageButton properly", () => {
    renderWithTheme("navy", <LanguageButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders ThemeButton properly", () => {
    renderWithTheme("navy", <ThemeButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
