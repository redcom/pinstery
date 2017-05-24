import { keyframes } from 'styled-components';

// Sizes variables
export const defaultSectionMargins = '2.5em 1em';
export const defaultSpaceInBetween = '1em 1em';
export const defaultSpaceBetweenElements = '0em 1em';
export const defaultSpaceAroundElements = '1em 0em';

export const defaultFontSize = '1em';
export const defaultBorderStyle = '1px solid #797979';
export const defaultLineHeight = 1.5;

// Colors variables
export const defaultSectionBackgroundColor = '#fff'; // #f6f8fa
export const defaultTextColor = '#5a5a5a';
export const defaultPrimaryBgColor = '#fff';
export const defaultPrimaryColor = '#000';
export const defaultNavBorderColor = '#4a90e2';

export const boxShadow = '0px 0px 30px 10px #eeeff0';

// Font style
export const headerFontSize = '18px';


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
