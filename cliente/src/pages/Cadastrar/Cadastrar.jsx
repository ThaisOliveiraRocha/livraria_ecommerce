import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import {
  Body,
  Modal,
  LabelComponent,
  InputComponent
} from "./Cadastrar.styles";
import { insertNewUser } from "../../api";
import { createUser } from "../../store/actions";

const Cadastrar = props => (
  <>
    <GlobalStyles />
    <Body>
      <Formik
        initialValues={{ nome: "", email: "", senha: "", isAdm: "0" }}
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
            console.log(infoUser);

            insertNewUser(infoUser)
              .then(response => {
                console.log(response.data);
                const data = response.data;
                props.createUser(data.newUser);
                props.history();
              })
              .catch(e => console.log(e));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Modal>
              <LabelComponent>
                <Titulo font="22px">Cadastrar</Titulo>
              </LabelComponent>
              <LabelComponent>
                <Titulo>Nome:</Titulo>
                <InputComponent
                  type="text"
                  name="nome"
                  onChange={handleChange}
                  value={values.nome}
                  placeholder="Digite o nome completo"
                  required
                />
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
                  placeholder="Escolha uma senha"
                  required
                />
              </LabelComponent>
              <LabelComponent>
                <InputComponent
                  type="hidden"
                  name="isAdm"
                  onChange={handleChange}
                  value={values.isAdm}
                />
              </LabelComponent>
              <LabelComponent>
                <Button type="submit" disabled={isSubmitting}>
                  <Texto color="white">Concluir</Texto>
                </Button>
              </LabelComponent>
            </Modal>
          </form>
        )}
      </Formik>
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

const mapDispatchToProps = (dispatch, { history }) => ({
  createUser: user => {
    dispatch(createUser(user));
  },
  history: () => {
    history.push("/home");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastrar);
