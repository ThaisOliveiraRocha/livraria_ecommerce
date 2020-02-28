import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  Titulo,
  CartContainer,
  CartImage,
  QuantidadeItens,
  TituloCarrinho
} from "./Header.styles";

const Header = props => (
  <Container>
    <Image src={require("../../assets/images/book_novo.svg")} />
    <Titulo>Livraria on-line</Titulo>
    <CartContainer>
      <CartImage src={require("../../assets/images/carrinho_mercado.png")} />
      <TituloCarrinho>carrinho</TituloCarrinho>
      <QuantidadeItens>1</QuantidadeItens>
    </CartContainer>
  </Container>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
