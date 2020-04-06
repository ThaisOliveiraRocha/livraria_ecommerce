import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  CartContainer,
  CartImage,
  QuantidadeItens,
  HomeComponent,
  CartButtonComponent,
  UserComponent,
  ButtonsComponent
} from "./Header.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../Button";
import Titulo from "../Title";
import Texto from "../Text";
import CartModal from "../CartModal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ModalUser from "../ModalUser/ModalUser";

import TextField from "@material-ui/core/TextField";

const totalCart = (carrinho) => {
  const total = carrinho.reduce((aux, livro) => {
    aux = aux + livro.qtd;
    return aux;
  }, 0);
  return total;
};

const Header = ({ carrinho, history, user }) => {
  const filterOptions = [
    { tipo: "Autor" },
    { tipo: "Promoção" },
    { tipo: "Menor preço" },
    { tipo: "Maior Preço" },
    { tipo: "Título" },
  ];
  const [showModal, setModalStatus] = useState(false);
  const [showModalUser, setModalUserStatus] = useState(false);
  const [showFilter, setFilter] = useState(false);

  return (
    <Container>
      <HomeComponent onClick={() => history.push("/home")}>
        <Image src={require("../../assets/images/rapidez.png")} />
        <Titulo font="26px" color="#ffffff" grow="1">
          futuro
        </Titulo>
      </HomeComponent>
      <ButtonsComponent>
        <UserComponent>
          {!user.nome ? (
            <Button onClick={() => history.push("/login")}>
              <CartButtonComponent>
                <CartImage>
                  <ExitToAppIcon style={{ marginRight: "5px" }} />
                </CartImage>
                <Texto color="white">Fazer Login!</Texto>
              </CartButtonComponent>
            </Button>
          ) : (
            <Button onClick={() => setModalUserStatus(!showModalUser)}>
              <CartButtonComponent>
                <CartImage>
                  <AccountCircleIcon style={{ marginRight: "5px" }} />
                </CartImage>
                <Texto color="white">Olá, {user.nome}!</Texto>
              </CartButtonComponent>
            </Button>
          )}
        </UserComponent>
        <CartContainer onClick={() => setModalStatus(!showModal)}>
          <Button>
            <CartButtonComponent>
              <CartImage>
                <ShoppingCartIcon />
              </CartImage>
              <Titulo color="white">Carrinho</Titulo>
            </CartButtonComponent>
          </Button>
          {carrinho.length > 0 && (
            <QuantidadeItens>{totalCart(carrinho)}</QuantidadeItens>
          )}
        </CartContainer>
      </ButtonsComponent>
      {showModal && (
        <CartModal carrinho={carrinho} onClose={() => setModalStatus(false)} />
      )}
      {showModalUser && (
        <ModalUser user={user} onClose={() => setModalUserStatus(false)} />
      )}
    </Container>
  );
};

Header.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = (state) => ({
  carrinho: state.livraria.carrinho,
  user: state.livraria.user,
});

export default withRouter(connect(mapStateToProps)(Header));
