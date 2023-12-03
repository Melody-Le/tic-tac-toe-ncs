import { createGlobalStyle } from "styled-components";

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
    margin: 0 auto;
  }
`;
export default GlobalStyle;
