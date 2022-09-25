import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.colors.bg};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 16px;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
