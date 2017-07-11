import styled from 'styled-components';

import { defaultFontSize, smallFontSize } from '../styles/vars';

export const Title = styled.h4`
  text-align: center;
  font-size: ${defaultFontSize};
`;
export const TitleItem = Title.extend`
  margin: 0;
  text-align: justify;
  font-size: ${smallFontSize};
  width: 8em;
`;
