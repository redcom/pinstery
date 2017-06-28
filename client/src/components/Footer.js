import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBox = styled.footer`
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(250,250,250, 0.6);
    box-shadow: 0 40px 0 rgba(153, 0, 102, 0.26);

`;

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  max-height: 2em;
  max-width: 2em;
  margin: 0 1em;
`;
const Copy = styled.p`
  display: block;
`;

const Footer = () =>
  <FooterBox>
    <Link to={'/'}>
      <Img src={'../assets/instagram.png'} alt="pinstery_instagram" />
    </Link>
    <Link to={'/'}>
      <Img src={'../assets/pinterest.png'} alt="pinstery_pinterest" />
    </Link>
    <Link to={'/'}>
      <Img src={'../assets/facebook.png'} alt="pinstery_facebook" />
    </Link>
    <Copy>&copy; Pinstery.com</Copy>
  </FooterBox>;

export default Footer;
