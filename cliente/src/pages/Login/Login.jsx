import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  Body,
  Modal,
  LabelComponent,
  InputComponent,
  LinkComponent
} from "./Login.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";
import { authenticateUser } from "../../api";

import { getLogin } from "../../store/actions";

const Login = props => (
  <>
    <GlobalStyles />
    <Body>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const infoUser = values;

            if (values.email === null || values.senha === null) return;

            console.log(infoUser);

            authenticateUser(infoUser)
              .then(response => {
                const data = response.data;
                props.getLogin(data);
                props.history();
              })
              .catch(e => console.log(e));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal>
              <LabelComponent>
                <Titulo font="22px">Bem-Vindo!</Titulo>
              </LabelComponent>
              <LabelComponent>
                <Titulo>E-mail:</Titulo>
                <InputComponent
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Digite o e-mail"
                  required
                />
              </LabelComponent>
              <LabelComponent>
                <Titulo>Senha:</Titulo>
                <InputComponent
                  type="password"
                  name="senha"
                  onChange={handleChange}
                  value={values.senha}
                  placeholder="Digite a senha"
                  required
                />
              </LabelComponent>
              <LinkComponent>
                <Link to="/cadastrar">Cadastrar</Link>
                <Link to="/alterar">Esqueci a senha</Link>
              </LinkComponent>
              <LabelComponent>
                <Button type="submit" disabled={isSubmitting}>
                  <Texto color="white">Login</Texto>
                </Button>
              </LabelComponent>
            </Modal>
          </form>
        )}
      </Formik>
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

const mapDispatchToProps = (dispatch, { history }) => ({
  getLogin: user => {
    dispatch(getLogin(user));
  },
  history: () => {
    history.push("/home");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
