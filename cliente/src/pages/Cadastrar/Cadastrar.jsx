import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { Body, Modal, LabelComponent, InputComponent } from './Cadastrar.styles';

const Cadastrar = props => (
  <>
    <GlobalStyles />
    <Body>
      <Modal>
        <LabelComponent>
          <Titulo font="22px">Cadastrar</Titulo>
        </LabelComponent>
        <LabelComponent>
          <Titulo>Nome:</Titulo>
          <InputComponent type="text" name="username" />
        </LabelComponent>
        <LabelComponent>
          <Titulo>E-mail:</Titulo>
          <InputComponent type="email" name="email" />
        </LabelComponent>
        <LabelComponent>
          <Titulo>Senha:</Titulo>
          <InputComponent type="password" name="senha" />
        </LabelComponent>
        <LabelComponent>
          <InputComponent type="hidden" name="is_adm" value="0" />
        </LabelComponent>
        <LabelComponent>
          <Button>
            <Texto color="white">Concluir</Texto>
          </Button>
        </LabelComponent>
      </Modal>
    </Body>
  </>
);

Cadastrar.propTypes = {
  // bla: PropTypes.string,
};

Cadastrar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastrar);
