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
  }
  
  #root {
    height: 100vh;
    background-image: url(${`${process.env.PUBLIC_URL}/images/blob-top.png`}),
    url(${`${process.env.PUBLIC_URL}/images/blob-bottom.png`});
    background-repeat: no-repeat, no-repeat;
    background-size: 22%, 10%;
    background-position: top right, bottom left;
  }
`;
