import React, { useEffect } from "react";
import PropTypes from "prop-types";
//import { Test } from './Details.styles';
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import DetailsBook from "./components/DetailsBook";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal } from "../../store/actions";


const Details = ({ detalhes, history, funcaoConfirma, cancel, showModal }) => {
  if (Object.keys(detalhes).length === 0) {
    {
      history.push("/");
    }
    return null;
  }
  return (
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
      <DetailsBook livro={detalhes} />
    </Layout>
  );
};

Details.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  detalhes: state.livraria.detalhes,
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
