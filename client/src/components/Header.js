import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContainer } from '../containers';

const Logo = require('../../public/assets/vimcar-logo.svg');

const HeaderBox = styled.header`
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 2em;
`;

const Header = () => (
  <HeaderBox>
    <Link to={'/'}>
      <img src={Logo} alt="Logo" />
    </Link>
    <CartContainer />
  </HeaderBox>
);

export default Header;
