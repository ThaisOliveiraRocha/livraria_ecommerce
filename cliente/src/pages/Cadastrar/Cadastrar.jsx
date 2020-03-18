import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import {
  Body,
  FormComponent,
  LabelComponent,
  ColText,
  ColInput,
  Row
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
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormComponent>
              <Titulo font="22px">Cadastrar</Titulo>

              <Row>
                <ColText>
                  <Titulo>Nome:</Titulo>
                </ColText>
                <ColInput>
                  <Input
                    type="text"
                    name="nome"
                    onChange={handleChange}
                    value={values.nome}
                    placeholder="Digite o nome completo"
                    required
                  />
                </ColInput>
              </Row>

              <Row>
                <ColText>
                  <Titulo>E-mail:</Titulo>
                </ColText>
                <ColInput>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Digite o e-mail"
                    required
                  />
                </ColInput>
              </Row>

              <Row>
                <ColText>
                  <Titulo>Senha:</Titulo>
                </ColText>
                <ColInput>
                  <Input
                    type="password"
                    name="senha"
                    onChange={handleChange}
                    value={values.senha}
                    placeholder="Escolha uma senha"
                    required
                  />
                </ColInput>
              </Row>

              <Row>
                <ColInput>
                  <Input
                    type="hidden"
                    name="isAdm"
                    onChange={handleChange}
                    value={values.isAdm}
                  />
                </ColInput>
              </Row>
              <Button type="submit" disabled={isSubmitting}>
                <Texto color="white">Cadastrar</Texto>
              </Button>
            </FormComponent>
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
