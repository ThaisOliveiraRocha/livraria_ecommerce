import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  CartContainer,
  CartImage,
  QuantidadeItens,
  HomeComponent
} from "./Header.styles";

import { connect } from "react-redux";

import Button from "../Button";
import Titulo from "../Title";
import Texto from "../Text";
import CartModal from "../CartModal";
import { withRouter } from "react-router-dom";

const totalCart = carrinho => {
  const total = carrinho.reduce((aux, livro) => {
    aux = aux + livro.qtd;
    return aux;
  }, 0);
  return total;
};

const Header = ({ carrinho, history }) => {
  const [showModal, setModalStatus] = useState(false);
  return (
    <Container>
      <HomeComponent onClick={() => history.push("/")}>
        <Image src={require("../../assets/images/book_novo.svg")} />
        <Titulo font="28px" color="#ffffff" grow="1">
          Livraria on-line
        </Titulo>
      </HomeComponent>
      <CartContainer onClick={() => setModalStatus(!showModal)}>
        <Button>
          <CartImage
            src={require("../../assets/images/carrinho_mercado.png")}
          />
          <Texto>Carrinho</Texto>
        </Button>
        {carrinho.length > 0 && (
          <QuantidadeItens>{totalCart(carrinho)}</QuantidadeItens>
        )}
      </CartContainer>
      {showModal && (
        <CartModal carrinho={carrinho} onClose={() => setModalStatus(false)} />
      )}
    </Container>
  );
};

Header.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  carrinho: state.livraria.carrinho
});

export default withRouter(connect(mapStateToProps)(Header));
