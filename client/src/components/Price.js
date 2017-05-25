import styled from 'styled-components';
import {
  defaultFontSize,
} from '../styles/vars';

const Price = styled.div`
  margin-top: ${props => props.marginTop || '1.2em'};
  font-size: ${props => props.fontSize || defaultFontSize};
  &${':after'} { content: '€'; },
  color: ${props => props.regular ? '#f4f4f4' : '#84b3eb'};
  color: ${props => props.discount ? '#84b33b' : '#84b3eb'};
  text-decoration: ${props => props.regular ? 'line-through' : 'none'};
`;

export default Price;
