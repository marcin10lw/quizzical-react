import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    padding: 20px;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`