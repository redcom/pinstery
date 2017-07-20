import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContainer } from '../containers';
import Icons from '../styles/icons';

const HeaderBox = styled.header`
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-bottom: 2em;
`;

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  height: 100%;
  width: 100%;
`;

const Header = () =>
  <HeaderBox>
    <Link to={'/'}>
      <Img src={Icons.logo} alt="Pinstery Logo" />
    </Link>
    <CartContainer />
  </HeaderBox>;

export default Header;
