// @flow

import React from 'react';
import styled from 'styled-components';
// import {
//   boxShadow,
//   defaultBorderColor,
//   defaultPrimaryBgColor,
//   defaultSpaceBetweenElements,
//   smallFontSize,
// } from '../styles/vars';

const WrapperMenu = styled.div`width: 20%;`;
const ShopMenu = () =>
  (<WrapperMenu>
    <ul>
      <li> all</li>
      <li> fashionista</li>
      <li> kids</li>
      <li> patterns</li>
      <li> funny</li>
      <li> messages</li>
      <li> trends</li>
      <li> celebrity</li>
      <li> cartoon</li>
      <li> tv series/tv shows</li>
    </ul>
  </WrapperMenu>);

export default ShopMenu;
