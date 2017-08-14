import styled from 'styled-components';
import Button from 'material-ui/Button';

import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
} from '../styles/vars';

const ButtonStyled = styled(Button)`
  font-size: ${props => props.fontSize || defaultFontSize};
  border: ${props => props.border || `2px solid ${defaultPrimaryColor}`};
  background: transparent;
  width: ${props => props.width || '80%'};
  color: ${defaultPrimaryColor};
  align-self: ${props => props.alignSelf || 'flex-end'};
  border-radius: 0.3em;
  line-height: ${defaultLineHeight};
`;

export default ButtonStyled;
