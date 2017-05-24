// @flow

import styled from 'styled-components';
import { boxShadow } from '../styles/vars';

const Image = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  min-width: 208px;
  min-height: 180px;
  width: 100%;
  height: 100%;
  box-shadow: ${boxShadow};
  background-image: url(${props => props.image});
  margin-bottom: 2.5em;
  display: flex;
  flex: 1;
`;

export default Image;

