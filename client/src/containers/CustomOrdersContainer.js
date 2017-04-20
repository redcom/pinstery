import React from 'react';
import { Wrapper } from '../components';
import {
  ShortUrlContainer,
  LinksContainer,
  ErrorContainer,
} from '../containers';

const AppContainer = () => (
  <div>
    <Wrapper>
      <h2>CustomOrdersContainer</h2>
      <ShortUrlContainer />
      <ErrorContainer />
    </Wrapper>
    <Wrapper>
      <LinksContainer />
    </Wrapper>
  </div>
);

export default AppContainer;
