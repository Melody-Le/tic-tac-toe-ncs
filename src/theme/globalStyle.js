import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    margin: 0;
    padding: 0;
    display: grid;
    place-content: center;
    min-height: 100vh;
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  button {
    all: unset;
    cursor: pointer;
    box-shadow: 5px 5px 5px ${theme.darkDeepBlue};
  }

  button:focus {
    outline: revert;
  }

`;
export default GlobalStyle;
