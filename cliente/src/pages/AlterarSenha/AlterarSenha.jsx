import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import {
  Body,
  Modal,
  LabelComponent,
  InputComponent
} from "./AlterarSenha.styles";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";

const AlterarSenha = props => (
  <>
    <GlobalStyles />
    <Body>
      <Modal>
        <LabelComponent>
          <Titulo font="22px">Alterar Senha</Titulo>
        </LabelComponent>
        <LabelComponent>
          <Titulo>E-mail:</Titulo>
          <InputComponent type="email" name="email" placeholder="Digite o e-mail" required/>
        </LabelComponent>
        <LabelComponent>
          <Titulo>Nova senha:</Titulo>
          <InputComponent type="password" name="senha" placeholder="Digite a nova senha" required/>
        </LabelComponent>
        <LabelComponent>
          <Button>
              <Texto color="white">Continuar</Texto>
          </Button>
        </LabelComponent>
      </Modal>
    </Body>
  </>
);

AlterarSenha.propTypes = {
  // bla: PropTypes.string,
};

AlterarSenha.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha);
