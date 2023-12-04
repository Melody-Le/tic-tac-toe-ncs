import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    color: ${theme.secondBright}
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    margin: 0;
    padding: 0;
    display: grid;
    place-content: center;
    min-height: 100vh;
    background-color:${theme.darkBlue}
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  button {
    all: unset;
    cursor: pointer;
  }

  button:focus {
    outline: revert;
  }

`;
export default GlobalStyle;
