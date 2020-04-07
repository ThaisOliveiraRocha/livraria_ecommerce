import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  CartImage,
  QuantidadeItens,
  HomeComponent,
  CartButtonComponent,
  ButtonsComponent,
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
import ModalUser from "../ModalUser/ModalUser";
import { getUserSession } from "../../api";

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
  const userLogado = JSON.parse(getUserSession());

  return (
    <Container>
      <HomeComponent onClick={() => history.push("/home")}>
        <Image src={require("../../assets/images/rapidez.png")} />
        <Titulo font="26px" color="#ffffff" grow="1">
          futuro
        </Titulo>
      </HomeComponent>
      <ButtonsComponent>
        {(userLogado === null) ? (
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
              <Texto color="white">Olá, {userLogado.nome}!</Texto>
            </CartButtonComponent>
          </Button>
        )}

        <Button onClick={() => setModalStatus(!showModal)}>
          <CartButtonComponent>
            <CartImage>
              <ShoppingCartIcon />
            </CartImage>
            {carrinho.length > 0 && (
              <QuantidadeItens>
                <Texto color="white">{totalCart(carrinho)}</Texto>
              </QuantidadeItens>
            )}
            <Titulo color="white">Carrinho</Titulo>
          </CartButtonComponent>
        </Button>
      </ButtonsComponent>
      {showModal && (
        <CartModal carrinho={carrinho} onClose={() => setModalStatus(false)} />
      )}
      {showModalUser && (
        <ModalUser user={userLogado} onClose={() => setModalUserStatus(false)} />
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

const mapDispatchToProps = (dispatch, { history }) => ({
  history: (path) => {
    history.push(path);
  }
});

export default withRouter(connect(mapStateToProps)(Header));
