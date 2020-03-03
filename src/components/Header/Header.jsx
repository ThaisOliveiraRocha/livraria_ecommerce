import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  CartContainer,
  CartImage,
  QuantidadeItens
} from "./Header.styles";

import { connect } from "react-redux";

import Button from "../../components/Button";
import Titulo from "../../components/Title";
import CartModal from "../CartModal";

const totalCart = carrinho => {
  const total = carrinho.reduce((aux, livro) => {
    aux = aux + livro.qtd;
    return aux;
  }, 0);
  return total;
};

const Header = ({ carrinho }) => {
  const [showModal, setModalStatus] = useState(false);
  return (
    <Container>
      <Image src={require("../../assets/images/book_novo.svg")} />
      <Titulo font="28px" color="#ffffff" grow="1">
        Livraria on-line
      </Titulo>
      <CartContainer onClick={() => setModalStatus(!showModal)}>
        <Button>
          <CartImage
            src={require("../../assets/images/carrinho_mercado.png")}
          />
          Carrinho
        </Button>
        {carrinho.length > 0 && (
          <QuantidadeItens>{totalCart(carrinho)}</QuantidadeItens>
        )}
      </CartContainer>
      {showModal && <CartModal />}
    </Container>
  );
};

Header.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  carrinho: state.livraria.carrinho
});

export default connect(mapStateToProps)(Header);
