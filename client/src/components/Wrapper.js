import styled from 'styled-components';

import {
  defaultSectionMargins,
  defaultSectionBackgroundColor,
} from '../styles/vars';

// Create a <Wrapper> react component that renders a <section> with a specific background-color
const Wrapper = styled.section`
  margin: ${defaultSectionMargins};
  background: ${defaultSectionBackgroundColor};
`;

export default Wrapper;
