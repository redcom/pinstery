import styled from 'styled-components';
import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
} from '../styles/vars';

const Button = styled.button`
  font-size: ${props => props.fontSize || defaultFontSize};
  border: ${props => props.border || `2px solid ${defaultPrimaryColor}`};
  background: transparent;
  width: ${props => props.width || '80%'};
  color: ${defaultPrimaryColor};
  align-self: ${props => props.alignSelf || 'flex-end'};
  border-radius: 0.3em;
  line-height: ${defaultLineHeight};
`;

export default Button;
