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
    

    @media (max-width: ${({ theme }) => theme.mobile}px) {
    padding: 0;
  }
  }
`