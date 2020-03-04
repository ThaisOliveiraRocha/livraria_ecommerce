import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ModalBody,
  Table,
  Tr,
  Th,
  TotalContainer,
  ButtonGroup,
  Overlay
} from "./CartModal.styles";
import Titulo from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import ItemCart from "./ItemCart/ItemCart";
import { withRouter } from "react-router-dom";
import { getCarrinho } from "../../store/actions";

const somaCarrinho = carrinho => {
  let soma = 0;
  carrinho.map((item, index) => {
    soma += item.qtd * item.preco;
  });
  return soma.toFixed(2);
};

const CartModal = ({ carrinho, showCarrinho, onClose }) => {
  if (carrinho.length === 0) {
    return (
      <>
      <Overlay onClick={onClose}/>
      <ModalBody>
        <Titulo>Meu Carrinho</Titulo>
        <Text>Carrinho vazio! Comece a comprar agora.</Text>
      </ModalBody>
      </>
    );
  }
  return (
    <>
      <Overlay onClick={onClose}/>
      <ModalBody>
        <Titulo>Meu carrinho</Titulo>
        <Table>
          <thead>
            <Tr>
              <Th></Th>
              <Th><Text>Título</Text></Th>
              <Th><Text>Qnt.</Text></Th>
              <Th><Text>Preço</Text></Th>
              <Th></Th>
            </Tr>
          </thead>
          <tbody>
            {carrinho.map((item, index) => {
              return <ItemCart key={index} item={item} />;
            })}
          </tbody>
        </Table>
        <TotalContainer>
          <Titulo>Total da compra:</Titulo>
          <Text> R$ {somaCarrinho(carrinho)}</Text>
        </TotalContainer>
        <ButtonGroup>
          <Button onClick={() => showCarrinho(carrinho)}>
            Finalizar Compra
          </Button>
        </ButtonGroup>
      </ModalBody>
    </>
  );
};

CartModal.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  carrinho: state.livraria.carrinho
});

const mapDispatchToProps = (dispatch, { history }) => ({
  showCarrinho: carrinho => {
    dispatch(getCarrinho(carrinho));
    history.push("/carrinho");
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartModal)
);
