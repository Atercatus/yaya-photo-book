import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size:10px;
  }

  html,body {
    min-height: 100vh;
    user-select : none;
    padding: 0;
    margin: 0;
  }
`;
