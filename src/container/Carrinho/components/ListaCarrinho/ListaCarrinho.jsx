import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TituloTopo, Item, ImageTrash } from "./ListaCarrinho.styles";

import { connect } from "react-redux";
import Text from "../../../../components/Text";
import { showModal } from "../../../../store/actions";
import { withRouter } from "react-router-dom";

const ListaCarrinho = ({ item, showModal }) => (
  <TituloTopo>
    <Item>
      <Text>{item.titulo}</Text>
    </Item>
    <Item>
      <Text>{item.qtd}</Text>
    </Item>
    <Item>
      <Text>R$ {item.preco}</Text>
    </Item>
    <Item>
      <ImageTrash
        src={require("../../../../assets/images/excluir.png")}
        onClick={() => showModal(item.titulo)}
      />
    </Item>
  </TituloTopo>
);

ListaCarrinho.propTypes = {
  // bla: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  showModal: titulo => {
    dispatch(showModal(titulo, true));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(ListaCarrinho));
