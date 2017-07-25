// #flow
import styled from 'styled-components';

import {
  defaultFontSize,
  defaultSpaceBetweenElements,
  defaultFontLabel,
} from '../styles/vars';

const Label = styled.label`
  padding: ${defaultSpaceBetweenElements};
  font-size: ${defaultFontSize};
  font-weight: bold;
  width: 15%;
  transition: 0.3s;
  position: absolute;
  &.focus {
    margin-left: -100px;
    font-size: ${defaultFontLabel};
  }
`;
export default Label;
