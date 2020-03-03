import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TituloTopo, Item, ImageTrash } from "./ListaCarrinho.styles";

import { connect } from "react-redux";
import Text from "../../../../components/Text";
import { removeLivro } from "../../../../store/actions";

const ListaCarrinho = ({ item, deleteItem }) => (
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
      <ImageTrash
        src={require("../../../../assets/images/excluir.png")}
        onClick={() => deleteItem(item)}
      />
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

const mapDispatchToProps = dispatch => ({
  deleteItem: item => {
    dispatch(removeLivro(item));
  }
});

export default connect(null, mapDispatchToProps)(ListaCarrinho);
