import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <NavLink to="/shop-buttons">Shop Buttons</NavLink>
    <NavLink to="/custom-orders">Custom Order</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/cart">Cart</NavLink>
  </div>
);

export default NavBar;
