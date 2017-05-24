import styled from 'styled-components';
import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
} from '../styles/vars';

const Button = styled.button`
  font-size: ${defaultFontSize};
  border: 2px solid ${defaultPrimaryColor};
  background: transparent;
  width: 80%;
  color: ${defaultPrimaryColor};
  align-self: ${props => props.alignSelf || 'flex-end'};
  border-radius: 0.3em;
  line-height: ${defaultLineHeight};
`;

export default Button;
