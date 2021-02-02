import Routes from "routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import Toast from "components/Toast";
import { useStore } from "store/store";
import themes from "styles/themes";

function App() {
  const theme = useStore((store) => store.theme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Routes />
      <GlobalStyles />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
