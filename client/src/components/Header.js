import React from 'react';
// import logo from '../assets/logo.svg';
import Icons from '../styles/icons';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to={'/'}>
      <img src={Icons.logo} alt="Pinstery Logo" width="100%" />
    </Link>
    <Link to={'/signin'} className="headerTopRight">
      Sign in
    </Link>
  </header>
);

export default Header;
