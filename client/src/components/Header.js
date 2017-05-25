import React from 'react';
import { Link } from 'react-router-dom';

import { CartContainer } from '../containers';

const Logo = require('../../public/assets/vimcar-logo.svg');

const Header = () => (
  <header>
    <Link to={'/'}>
      <img src={Logo} alt="Logo" />
    </Link>
    <CartContainer />
  </header>
);

export default Header;
