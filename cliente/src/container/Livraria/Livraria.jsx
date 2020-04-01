import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal } from "../../store/actions";
import { withRouter } from "react-router-dom";
import Slider from "../../components/Slider";
import {
  LivrariaContainer,
  SliderContainer,
  CardContainer
} from "./Livraria.styles";
import Titulo from "../../components/Title";

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
    <LivrariaContainer>
      <SliderContainer>
        <Slider />
      </SliderContainer>
      <Titulo font="22px">Conheça nossos produtos</Titulo>
      <CardContainer>
        {livros.map((livro, index) => {
          return <Card key={index} livro={livro} />;
        })}
      </CardContainer>
    </LivrariaContainer>
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  livros: state.livraria.vetLivros,
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
  connect(mapStateToProps, mapDispatchToProps)(Livraria)
);
