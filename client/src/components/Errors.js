import styled from 'styled-components';
import { defaultFontSize, shake } from '../styles/vars';

const Errors = styled.div`
  color: red;
  animation: ${shake} 1s cubic-bezier(.36, .07, .19, .97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  text-align: center;
  font-size: ${defaultFontSize};
  background: center left no-repeat url('../../assets/alert-icon.svg');
  padding-left: 35px;
  line-height: 2;
`;

export default Errors;
