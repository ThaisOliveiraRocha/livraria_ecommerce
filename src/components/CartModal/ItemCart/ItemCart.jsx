import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tr, Td, ImageBook, ImageTrash } from "./ItemCart.styles";
import Text from "../../../components/Text";
import { removeLivro } from "../../../store/actions";

const ItemCart = ({ item, deleteItem }) => (
  <Tr>
    <Td>
      <ImageBook src={require(`../../../assets/images/${item.imagem}`)} />
    </Td>
    <Td>
      <Text>{item.titulo}</Text>
    </Td>
    <Td>
      <Text>{item.qtd}</Text>
    </Td>
    <Td>
      <Text>R${item.preco}</Text>
    </Td>
    <Td>
      <ImageTrash
        src={require("../../../assets/images/excluir.png")}
        onClick={() => deleteItem(item)}
      />
    </Td>
  </Tr>
);

ItemCart.propTypes = {
  // bla: PropTypes.string,
};
const mapStateToProps = state => ({
  // item: state.livraria.carrinho
});

const mapDispatchToProps = dispatch => ({
  deleteItem: item => {
    dispatch(removeLivro(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
