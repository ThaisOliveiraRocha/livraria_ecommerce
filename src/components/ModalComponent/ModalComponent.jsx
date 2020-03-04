import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ContainerModal,
  HeaderModal,
  BodyModal,
  Overlay,
  FooterModal
} from "./ModalComponent.styles";
import Titulo from "../Title";
import Texto from "../Text";
import Button from "../Button";

const ModalComponent = ({ temaModal, mensagem, funcaoConfirma, cancel }) => {
  return (
    <>
      <Overlay onClick={cancel} />
      <ContainerModal>
        <Button onClick={cancel} className="close">
          X
        </Button>
        <HeaderModal>
          <Titulo>{temaModal}</Titulo>
        </HeaderModal>
        <BodyModal>
          <Texto>{mensagem}</Texto>
        </BodyModal>
        <FooterModal>
          <Button
            background="green"
            onClick={funcaoConfirma}
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

ModalComponent.propTypes = {
  // bla: PropTypes.string,
};

ModalComponent.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

export default connect(mapStateToProps, null)(ModalComponent);
