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
  FilterComponent,
  Filter
} from "./Header.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../Button";
import Titulo from "../Title";
import Texto from "../Text";
import CartModal from "../CartModal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
      <HomeComponent onClick={() => history.push("/home")}>
        <Image src={require("../../assets/images/rapidez.png")} />
        <Titulo font="26px" color="#ffffff" grow="1">
          futuro
        </Titulo>
      </HomeComponent>
      <FilterComponent>
        <Filter>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            placeholder="Pesquisar..."
            inputProps={{ "aria-label": "pesquisar" }}
            name="pesquisar"
            fullWidth
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Filter>
      </FilterComponent>
      <UserComponent>
        <Button>
          <CartButtonComponent>
            <CartImage>
              <AccountCircleIcon
                style={{ marginRight: "5px" }}
              />
            </CartImage>
            <Texto color="white">Olá, mãe!</Texto>
          </CartButtonComponent>
        </Button>
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
