import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  TituloTopo,
  Item,
  ImageTrash,
} from "./ListaCarrinho.styles";

import { connect } from "react-redux";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";

const ListaCarrinho = ({ item }) => (
    <TituloTopo>
      <Item>
        <Text>{item.titulo}</Text>
      </Item>
      <Item>
        <Text>{item.preco}</Text>
      </Item>
      <Item>
        <Text>{item.qtd}</Text>
      </Item>
      <Item>
        <ImageTrash src={require("../../../../assets/images/excluir.png")} />
      </Item>
    </TituloTopo>
);

ListaCarrinho.propTypes = {
  // bla: PropTypes.string,
};

// const mapStateToProps = state => ({
//   carrinho: state.livraria.carrinho
// });

// const mapDispatchToProps = (dispatch, { history }) => ({
//   showCarrinho: (carrinho) => {dispatch(getCarrinho(carrinho)); history.push("/carrinho")}
// });

export default connect(null)(ListaCarrinho);
