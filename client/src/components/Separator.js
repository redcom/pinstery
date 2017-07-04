import styled from 'styled-components';

import { grey } from '../styles/vars';

// Create a <Wrapper> react component that renders a <section> with a specific background-color
const Separator = styled.div`
  width: 100%;
  border-top: 1px dashed ${grey};
`;

export default Separator;
