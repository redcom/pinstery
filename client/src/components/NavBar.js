import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  defaultNavBorderColor,
  defaultTextColor,
  headerFontSize,
} from '../styles/vars';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 10%;
`;

const NavLinkStyled = styled(NavLink)`
    color: ${defaultTextColor};
    font-weight: bold;
    text-decoration: none;
    padding-bottom: 12px;
    fonst-size: ${headerFontSize};
    &.${props => props.activeClassName} {
      border-bottom: 3px solid ${defaultNavBorderColor};
    }
 `;

const NavBar = () =>
  <Navigation>
    <NavLinkStyled to="/shop" activeClassName="active">
      Shop
    </NavLinkStyled>
    <NavLinkStyled to="/customize" activeClassName="active">
      {' '}Customize{' '}
    </NavLinkStyled>
    <NavLinkStyled to="/about" activeClassName="active">
      About
    </NavLinkStyled>
    <NavLinkStyled to="/contact" activeClassName="active">
      Contact
    </NavLinkStyled>
  </Navigation>;

export default NavBar;
