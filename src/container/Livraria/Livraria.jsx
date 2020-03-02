import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
// import {
//   Test
// } from "./Livraria.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Text from "../../components/Text";

const Livraria = props => (
  <Layout>
    <Card />
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

Livraria.defaultProps = {};

export default Livraria;
