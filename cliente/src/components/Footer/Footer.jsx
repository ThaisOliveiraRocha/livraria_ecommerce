import React from 'react';
import PropTypes from 'prop-types';
import { FooterComponent } from './Footer.styles';
import Texto from "../Text";

const Footer = (props) => (
  <>
    <FooterComponent>
      <Texto color="white">Livraria Futuro</Texto>
      <Texto color="white">Desde 2020</Texto>
    </FooterComponent>
  </>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
