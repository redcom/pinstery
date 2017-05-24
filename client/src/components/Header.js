import React from 'react';
import { Link } from 'react-router-dom';

const Logo = require('../../public/assets/vimcar-logo.svg');
const Cart = require('../../public/assets/cart.svg');

const Header = () => (
  <header>
    <Link to={'/'}>
      <img src={Logo} alt="Logo" />
    </Link>
    <Link to={'/cart'} className="headerTopRight">
      <img src={Cart} alt="cart" />
    </Link>
  </header>
);

export default Header;
