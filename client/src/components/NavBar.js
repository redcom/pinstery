import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="/journal">Journal</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/more">More</NavLink>
  </div>
);

export default NavBar;
