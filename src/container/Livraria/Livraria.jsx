import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
// import {
//   Test
// } from "./Livraria.styles";

const Livraria = ({livros}) => (
  <Layout>
    {livros.map((livro, index) => {
      return <Card key={index} livro={livro}/>
    })}
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  livros: state.livraria.livros,
});

export default connect(mapStateToProps)(Livraria);
