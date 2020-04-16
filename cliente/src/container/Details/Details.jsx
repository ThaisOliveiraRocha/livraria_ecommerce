import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Body } from "./Details.styles";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import DetailsBook from "./components/DetailsBook";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal } from "../../store/actions";
import { withRouter } from "react-router-dom";
import SinopseBook from "./components/SinopseBook";

export const Details = ({
  detalhes,
  history,
  funcaoConfirma,
  cancel,
  showModal
}) => {
  if (Object.keys(detalhes).length === 0) {
    {
      history.push("/home");
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
      <Body>
        <DetailsBook livro={detalhes} />
        <SinopseBook livro={detalhes} />
      </Body>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
