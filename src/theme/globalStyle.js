import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { padding, BREAKPONITS } from "./commonStyles";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    color: ${theme.secondBright};

  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    margin: 0;
    padding: ${padding.md}rem; 
    display: flex;
    justify-content: center; 
    min-height: 100vh;
    background-color:${theme.darkBlue};

    ${BREAKPONITS.tablet} {
      padding: ${padding.lg}rem; 
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  button {
    all: unset;
    cursor: pointer;
    &:hover {
      background-color: ${theme.highlight};
      color: ${theme.secondDarkBlue};
    }
  }

`;
export default GlobalStyle;
