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
  .headerTopRight{
    position: absolute;
    right: 1em;
    top: 1em;
  }
  .intro {
    font-size: large;
  }
  .navBar {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    border: 1px solid;
    border-radius: 20px;
  }
  .navBar a {
    text-decoration: none;
  }
  .navBar a.active {
    text-decoration: underline;
  }
`;
