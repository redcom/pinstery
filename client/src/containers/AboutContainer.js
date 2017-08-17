import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title } from '../components';

const Statement = styled.p`text-decoration: underline;`;

const Container = () =>
  <Wrapper>
    <Title>About</Title>
    <div>
      <p>
        One way to improve your live is to send your messages more creatively
        and connect better with people this way.
      </p>
      <p>
        <a href="/" title="Go to Pinstery homepage">
          Pinstery
        </a>{' '}
        was founded because we wanted to give to our clients the posibility to
        express themselvs in a unique way, by wering button badges. This are a
        brilliant invention and we are happy to use it in combination with our
        original designs, so that we create product you can weat it with pride.
      </p>
      <p>
        Our compani is a family-run business launcged in 2017 and opperating
        from Germany, that aims to delover height-cuality button badges at fair
        prices, paying atttention at the same time to providing excelent
        customer service.
      </p>
      <p>We can make it possible for you to express yourself creatively.</p>
      <Statement>Make a statement!</Statement>
    </div>
  </Wrapper>;

export default Container;
