import ReactDOM from "react-dom/client";
import Questions from "./components/Questions";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./core/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Questions />
    </ThemeProvider>
  </Provider>
);
