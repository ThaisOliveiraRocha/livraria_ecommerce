import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
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
import { updatePassword } from "../../api";
import { updatePass } from "../../store/actions";

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
            <Modal>
              <LabelComponent>
                <Titulo font="22px">Alterar Senha</Titulo>
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
                <Titulo>Nova senha:</Titulo>
                <InputComponent
                  type="password"
                  name="senha"
                  onChange={handleChange}
                  value={values.senha}
                  placeholder="Digite a nova senha"
                  required
                />
              </LabelComponent>
              <LabelComponent>
                <Button type="submit" disabled={isSubmitting}>
                  <Texto color="white">Continuar</Texto>
                </Button>
              </LabelComponent>
            </Modal>
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
    dispatch(updatePass(user))
  },
  history: () => {
    history.push("/login");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarSenha);
