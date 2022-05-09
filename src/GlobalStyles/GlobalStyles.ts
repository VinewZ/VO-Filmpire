import { createGlobalStyle } from "styled-components"
import * as v from './Variables'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${v.themeBg};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Oswald", sans-serif;
  }

  .App{
    display: flex;
  }
 `