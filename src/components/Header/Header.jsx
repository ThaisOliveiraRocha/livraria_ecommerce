import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  CartContainer,
  CartImage,
  QuantidadeItens
} from "./Header.styles";

import Button from "../../components/Button";
import Titulo from "../../components/Title";

const Header = props => (
  <Container>
    <Image src={require("../../assets/images/book_novo.svg")} />
    <Titulo font="28px" color="#ffffff" grow="1">
      Livraria on-line
    </Titulo>
    <CartContainer>
      <Button>
        <CartImage src={require("../../assets/images/carrinho_mercado.png")} />
        Carrinho
      </Button>
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
