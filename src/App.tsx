import React from "react";
import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
