import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Body, Modal, LabelComponent, InputComponent } from "./Login.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";

const Login = props => (
  <>
    <GlobalStyles />
    <Body>
      <Modal>
        <LabelComponent>
          <Titulo font="20px">Bem-Vindo</Titulo>
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
          <Text><a></a></Text>
        </LabelComponent>
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
