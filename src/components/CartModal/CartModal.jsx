import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ModalBody,
  Table,
  Tr,
  Th,
  TotalContainer,
  ButtonGroup
} from "./CartModal.styles";
import Titulo from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import ItemCart from "./ItemCart/ItemCart";

const somaCarrinho = carrinho => {
  let soma = 0;
  carrinho.map((item, index) => {
    soma += item.qtd * item.preco;
  });
  return soma;
};

const CartModal = ({ carrinho }) => (
  <ModalBody>
    <Titulo>Meu carrinho</Titulo>
    <Table>
      <thead>
        <Tr>
          <Th></Th>
          <Th>Título</Th>
          <Th>Quantidade</Th>
          <Th>Preço</Th>
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
      <Button>Finalizar Compra</Button>
    </ButtonGroup>
  </ModalBody>
);

CartModal.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  carrinho: state.livraria.carrinho
});

export default connect(mapStateToProps)(CartModal);
