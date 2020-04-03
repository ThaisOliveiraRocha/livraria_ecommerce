import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Body,
  ModalComponent,
  TituloContainer,
  Table,
  Th,
  TotalContainer,
  ButtonGroup,
  Overlay
} from "./CartModal.styles";
import Titulo from "../Title";
import Text from "../Text";
import Button from "../Button";
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

export const CartModal = ({ carrinho, showCarrinho, onClose }) => {
  if (carrinho.length === 0) {
    return (
      <>
        <Overlay onClick={onClose} />
        <Body>
          <Titulo>Meu Carrinho</Titulo>
          <Text>Carrinho vazio! Comece a comprar agora.</Text>
        </Body>
      </>
    );
  }
  return (
    <>
      <Overlay onClick={onClose} />
      <Body>
        <TituloContainer>
          <Titulo>Meu carrinho</Titulo>
        </TituloContainer>
        <ModalComponent>
          <Table>
            <thead>
              <tr>
                <Th></Th>
                <Th>
                  <Text>Título</Text>
                </Th>
                <Th>
                  <Text>Qnt.</Text>
                </Th>
                <Th>
                  <Text>Preço</Text>
                </Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((item, index) => {
                return <ItemCart key={index} item={item} />;
              })}
            </tbody>
          </Table>
        </ModalComponent>
        <TotalContainer>
          <Titulo>Total da compra:</Titulo>
          <Text> R$ {somaCarrinho(carrinho)}</Text>
        </TotalContainer>
        <ButtonGroup>
          <Button className="btnComprar" onClick={() => showCarrinho(carrinho)}>
            <Text color="white">Finalizar Compra</Text>
          </Button>
        </ButtonGroup>
      </Body>
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
