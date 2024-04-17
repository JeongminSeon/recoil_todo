import React from "react";
import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
