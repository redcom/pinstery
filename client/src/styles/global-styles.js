import { injectGlobal, keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .app-container {
    padding: 20px;
  }

  header {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .intro {
    font-size: large;
  }
`;
