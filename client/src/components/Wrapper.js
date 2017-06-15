import styled from 'styled-components';

import { defaultSectionBackgroundColor } from '../styles/vars';

// Create a <Wrapper> react component that renders a <section> with a specific background-color
const Wrapper = styled.section`
  margin: 1em;
  background: ${defaultSectionBackgroundColor};
`;

export default Wrapper;
