import styled from 'styled-components';
import {
  defaultFontSize,
  defaultPrimaryBgColor,
  defaultPrimaryColor,
  defaultLineHeight,
} from '../styles/vars';

const Button = styled.button`
  font-size: ${defaultFontSize};
  border: none;
  background: ${defaultPrimaryBgColor};
  color: ${defaultPrimaryColor};
  align-self: flex-end;
  border-radius: 0.3em;
  line-height: ${defaultLineHeight};
`;

export default Button;
