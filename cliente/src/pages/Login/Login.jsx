import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Body, Modal, LabelComponent, InputComponent, LinkComponent } from "./Login.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";

const Login = props => (
  <>
    <GlobalStyles />
    <Body>
      <Modal>
        <LabelComponent>
          <Titulo font="22px">Bem-Vindo!</Titulo>
        </LabelComponent>
        <LabelComponent>
          <Titulo>E-mail:</Titulo>
          <InputComponent type="email" name="email" placeholder="Digite o e-mail" required/>
        </LabelComponent>
        <LabelComponent>
          <Titulo>Senha:</Titulo>
          <InputComponent type="password" name="senha" placeholder="Digite a senha" required/>
        </LabelComponent>
        <LinkComponent>
          <Link to="/cadastrar">Cadastrar</Link>
          <Link to="/alterar">Esqueci a senha</Link>
        </LinkComponent>
        <LabelComponent>
          <Button>
            <Texto color="white">Login</Texto>
          </Button>
        </LabelComponent>
      </Modal>
    </Body>
  </>
);

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
