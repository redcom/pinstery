import { keyframes } from 'styled-components';

// Sizes variables
export const defaultSectionMargins = '2.5em 10em';
export const defaultSpaceInBetween = '1em 1em';
export const defaultSpaceBetweenElements = '0em 1em';
export const defaultSpaceAroundElements = '1em 0em';

export const defaultBorderStyle = '1px solid #797979';
export const defaultLineHeight = 1.5;

// Colors variables
export const white = '#fff';
export const black = '#000';
export const grey = '#d9dadc';
export const greyText = '#969696';

export const defaultSectionBackgroundColor = white; // #f6f8fa
export const defaultTextColor = '#5a5a5a';
export const defaultPrimaryBgColor = white;
export const defaultPrimaryColor = black;
export const defaultAlertBgColor = '#ff4259';
export const defaultBorderColor = '#e6e6e6';
export const defaultNavBorderColor = '#4a90e2';
export const defaultBtnBorderColor = '#ff9ca7';

export const boxShadow = '0px 0px 30px 10px rgba(238, 239, 240, 0.6)';
export const boxShadowBottom =
  '0px 1px 0 0 rgba(0, 0, 0, 0.07), 0px 1px 4px 0 rgba(0, 0, 0, 0.1)';

// Font style
export const defaultFontSize = '1.2em';
export const headerFontSize = '18px';
export const smallFontSize = '13px';
export const defaultFontLabel = '14px';

export const slideInAnimation = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0.4;
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
