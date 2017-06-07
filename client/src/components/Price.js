import styled from 'styled-components';
import { smallFontSize } from '../styles/vars';

export const Price = styled.div`
  margin-top: ${props => props.marginTop || '1em'};
  font-size: ${props => props.fontSize || smallFontSize};
  color: ${props => props.color || '#84b3eb'};
  &:after { content: '€'; }
  margin-bottom: 2.5em;
`;
export const PriceRegular = styled(Price)`
  color: #949490;
  margin-bottom: ${props => props.marginBottom || '2.5em'};
  text-decoration: line-through;
`;

export const PriceDiscounted = styled(Price)`
  color: #84b33b;
  margin-bottom: ${props => props.marginBottom || '2.5em'};
`;
