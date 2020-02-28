import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout'
import Card from './components/Card/Card';
//import { Test } from './Livraria.styles';

const Livraria = (props) => (
  <Layout>
    <Card />
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

Livraria.defaultProps = {
  // bla: 'test',
};

export default Livraria;
