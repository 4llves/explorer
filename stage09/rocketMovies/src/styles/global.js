import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXT};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transform: filter .2s;
  }

  ::-webkit-scrollbar {
    width: 8px;    
    border-radius: 8px;
  }  

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
    border-radius: 50px;
  }
`