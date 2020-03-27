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
import { withRouter } from "react-router-dom";

export const ModalComponent = ({
  temaModal,
  mensagem,
  funcaoConfirma,
  cancel
}) => {
  return (
    <>
      <Overlay onClick={cancel} />
      <ContainerModal>
        <Button onClick={cancel} className="close" background="#818A96">
          <Texto color="white">X</Texto>
        </Button>
        <HeaderModal>
          <Titulo>{temaModal}</Titulo>
        </HeaderModal>
        <BodyModal>
          <Texto>{mensagem}</Texto>
        </BodyModal>
        <FooterModal>
          <Button
            onClick={funcaoConfirma}
            className="margin-right-10 btnConfirmar"
          >
            <Texto color="white">Confirmar</Texto>
          </Button>
          <Button background="#818A96" onClick={cancel} className="btnCancelar">
            <Texto color="white">Cancelar</Texto>
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

export default withRouter(connect(mapStateToProps, null)(ModalComponent));
