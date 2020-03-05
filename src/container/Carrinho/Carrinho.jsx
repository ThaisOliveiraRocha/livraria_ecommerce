import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  TableCart,
  TituloTopo,
  Cabecalho,
  BodyCart,
  ButtonContainer,
  TotalContainer
} from "./Carrinho.styles";
import { connect } from "react-redux";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Text from "../../components/Text";
import ListaCarrinho from "./components/ListaCarrinho";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal, showCompra } from "../../store/actions";

const somaCarrinho = carrinho => {
  let soma = 0;
  carrinho.map(item => {
    soma += item.qtd * item.preco;
  });
  return soma.toFixed(2);
};

const Carrinho = ({
  carrinho,
  history,
  funcaoConfirma,
  funcaoFinalizar,
  cancel,
  showRemoveModal,
  showModalCompra,
  showCompra
}) => {

  if (carrinho.length === 0) {
    {
      history.push("/");
    }
  }
  return (
    <Layout>
      {showRemoveModal && (
        <ModalComponent
          temaModal={"Deseja realizar a exclusão?"}
          mensagem={"O item selecionado será excluído permanentemente."}
          onClose={cancel}
          funcaoConfirma={funcaoConfirma}
          cancel={cancel}
        />
      )}
      {showModalCompra && (
        <ModalComponent
          temaModal={"Deseja finalizar a compra?"}
          mensagem={"Você será redirecionado para a Home."}
          onClose={() => showCompra(false)}
          funcaoConfirma={funcaoFinalizar}
          cancel={() => showCompra(false)}
        />
      )}
      <BodyCart>
        <TableCart>
          <thead>
            <TituloTopo>
              <Cabecalho>
                <Titulo>Título</Titulo>
              </Cabecalho>
              <Cabecalho>
                <Titulo>Quantidade</Titulo>
              </Cabecalho>
              <Cabecalho>
                <Titulo>Preço</Titulo>
              </Cabecalho>
              <Cabecalho>
                <Titulo>Descartar</Titulo>
              </Cabecalho>
            </TituloTopo>
          </thead>
          <tbody>
            {carrinho.map((item, index) => {
              return <ListaCarrinho key={index} item={item} />;
            })}
          </tbody>
        </TableCart>
        <TotalContainer>
          <Titulo>Total da compra:</Titulo>
          <Text> R$ {somaCarrinho(carrinho)}</Text>
        </TotalContainer>
        <ButtonContainer>
          <Button background="green" onClick={() => showCompra(true)}>
            Finalizar
          </Button>
          <Button background="red" onClick={() => history.push("/")}>
            Cancelar
          </Button>
        </ButtonContainer>
      </BodyCart>
    </Layout>
  );
};

Carrinho.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  carrinho: state.livraria.carrinho,
  showRemoveModal: state.livraria.removeModal,
  showModalCompra: state.livraria.modalCompra
});

const mapDispatchToProps = (dispatch, { history }) => ({
  funcaoConfirma: () => {
    dispatch(removeLivro());
  },
  funcaoFinalizar: () => {
    history.push("/");
  },
  cancel: () => {
    dispatch(showModal("", false));
  },
  showCompra: (status) => {
    dispatch(showCompra(status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);
