import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
import RemoveItemModal from "../../components/RemoveItemModal";
// import {
//   Test
// } from "./Livraria.styles";

const Livraria = ({ livros, showModal }) => (
  <Layout>
    {showModal && (
      <RemoveItemModal onClose={() => {}} />
    )}

    {livros.map((livro, index) => {
      return <Card key={index} livro={livro} />;
    })}
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  livros: state.livraria.livros,
  showModal: state.livraria.removeModal
});

export default connect(mapStateToProps)(Livraria);
