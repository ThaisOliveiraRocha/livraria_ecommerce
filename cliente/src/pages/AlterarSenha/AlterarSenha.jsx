import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import {
  Body,
  FormComponent,
  ColText,
  ColInput,
  Row
} from "./AlterarSenha.styles";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";
import { updatePassword } from "../../api";
import { updatePass } from "../../store/actions";
import Input from "../../components/Input";

const AlterarSenha = props => (
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
            console.log(infoUser);

            updatePassword(infoUser)
              .then(response => {
                const data = response.data;
                props.updatePass(data);
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
            <FormComponent>
              <Row>
                <Titulo font="22px">Alterar Senha</Titulo>
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
                  <Titulo>Nova senha:</Titulo>
                </ColText>
                <ColInput>
                  <Input
                    type="password"
                    name="senha"
                    onChange={handleChange}
                    value={values.senha}
                    placeholder="Digite a nova senha"
                    required
                  />
                </ColInput>
              </Row>
              <Row>
                <Button type="submit" disabled={isSubmitting}>
                  <Texto color="white">Alterar</Texto>
                </Button>
              </Row>
            </FormComponent>
          </form>
        )}
      </Formik>
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

const mapDispatchToProps = (dispatch, { history }) => ({
  updatePass: user => {
    dispatch(updatePass(user));
  },
  history: () => {
    history.push("/login");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha);
