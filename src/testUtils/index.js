const { ThemeProvider } = require("styled-components");
import themes from "styles/themes";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const renderWithTheme = (themeString = "navy", component) => {
  render(
    <ThemeProvider theme={themes[themeString]}>{component}</ThemeProvider>
  );
};

export const renderWithThemeAndRouter = (themeString = "navy", component) => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={themes[themeString]}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};
