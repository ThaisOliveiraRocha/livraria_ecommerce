import React, { useState } from "react";
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
import CartModal from "../CartModal";

const Header = props => { 
  const [showModal, setModalStatus] = useState(false);
  return (
  <Container>
    <Image src={require("../../assets/images/book_novo.svg")} />
    <Titulo font="28px" color="#ffffff" grow="1">
      Livraria on-line
    </Titulo>
    <CartContainer onClick={() => setModalStatus(!showModal)}>
      <Button>
        <CartImage src={require("../../assets/images/carrinho_mercado.png")} />
        Carrinho
      </Button>
      <QuantidadeItens>1</QuantidadeItens>
    </CartContainer>
    {showModal && <CartModal />}
  </Container>
)};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
