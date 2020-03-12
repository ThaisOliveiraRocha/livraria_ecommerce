import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal } from "../../store/actions";
import { withRouter } from "react-router-dom";

const Livraria = ({ livros, showModal, funcaoConfirma, cancel }) => (
  <Layout>
    {showModal && (
      <ModalComponent
        temaModal="Deseja excluir o item?"
        mensagem="O item selecionado será excluído permanentemente."
        onClose={cancel}
        funcaoConfirma={funcaoConfirma}
        cancel={cancel}
      />
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

const mapDispatchToProps = dispatch => ({
  funcaoConfirma: () => {
    dispatch(removeLivro());
  },
  cancel: () => {
    dispatch(showModal("", false));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Livraria));
