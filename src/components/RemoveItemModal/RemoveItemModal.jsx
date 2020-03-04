import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ContainerModal,
  HeaderModal,
  BodyModal,
  Overlay,
  FooterModal
} from "./RemoveItemModal.styles";
import { removeLivro, showModal } from "../../store/actions";
import Titulo from "../Title";
import Texto from "../Text";
import Button from "../Button";

const RemoveItemModal = ({ cancel, deleteItem }) => {
  return (
    <>
      <Overlay onClick={cancel} />
      <ContainerModal>
        <Button onClick={cancel} className="close">
          X
        </Button>
        <HeaderModal>
          <Titulo>Deseja excluir o item?</Titulo>
        </HeaderModal>
        <BodyModal>
          <Texto>O item selecionado será excluído permanentemente.</Texto>
        </BodyModal>
        <FooterModal>
          <Button
            background="green"
            onClick={() => deleteItem()}
            className="margin-right-10"
          >
            Confirmar
          </Button>
          <Button background="red" onClick={cancel}>
            Cancelar
          </Button>
        </FooterModal>
      </ContainerModal>
    </>
  );
};

RemoveItemModal.propTypes = {
  // bla: PropTypes.string,
};

RemoveItemModal.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  deleteItem: () => {
    dispatch(removeLivro());
  },
  cancel: () => {
    dispatch(showModal("", false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveItemModal);
