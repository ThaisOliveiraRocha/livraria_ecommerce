import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tr, Td, ImageBook, ImageTrash } from "./ItemCart.styles";
import Text from "../../Text";
import { showModal } from "../../../store/actions";
import { withRouter } from "react-router-dom";

export const ItemCart = ({ item, deleteItem }) => {
  return (
    <>
      <Tr>
        <Td>
          <ImageBook src={item.imagem} />
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
            className="btnLixeira"
            src={require("../../../assets/images/excluir.png")}
            onClick={() => deleteItem(item.titulo)}
          />
        </Td>
      </Tr>
      
    </>
  );
};

ItemCart.propTypes = {
  // bla: PropTypes.string,
};
const mapStateToProps = state => ({
  // item: state.livraria.carrinho
});

const mapDispatchToProps = dispatch => ({
  deleteItem: titulo => {
    dispatch(showModal(titulo, true));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemCart));
