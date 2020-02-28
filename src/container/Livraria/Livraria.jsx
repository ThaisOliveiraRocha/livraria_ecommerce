import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout'
import Card from './components/Card/Card';
//import { Test } from './Livraria.styles';

const LIVROS_JSON = '../../../mock/livros.json';

const Livraria = (props) => (
  <Layout>
    <Card />
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

Livraria.defaultProps = {
  
};

export default Livraria;
