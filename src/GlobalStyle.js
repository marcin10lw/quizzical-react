import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    padding: 0 20px;
    
    @media (max-width: ${({ theme }) => theme.mobile}px) {
      padding: 0;
    }
  }

  #root {
    @media (min-width: ${({ theme }) => theme.mobile}px) {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
`;
