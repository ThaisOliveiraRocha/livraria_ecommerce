import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  Middle,
  Body,
  Modal,
  LabelComponent,
  InputComponent,
  TituloComponent
} from "./Gerenciar.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { deleteUser } from "../../api";

const Gerenciar = props => (
  <>
    <GlobalStyles />
    <Body>
      <TituloComponent>
        <Titulo>Gerenciar Usuários do Sistema</Titulo>
      </TituloComponent>
      <Middle>
        <Modal>
          <div>
            <Titulo>Lista de Usuários</Titulo>
          </div>
          <div>{/* listar usuários ao clicar em listar, exibe lista */}</div>
        </Modal>
        <Formik
          initialValues={{ email: "" }}
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

              deleteUser(infoUser)
                .then(response => {
                  const data = response.data;
                  alert("excluido com sucesso!")
                  //props.getLogin(data);
                  //props.history();
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
                <div>
                  <LabelComponent>
                    <Titulo>Realizar Exclusão?</Titulo>
                    <InputComponent
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Selecione o e-mail"
                      required
                    />
                    <Button type="submit" disabled={isSubmitting}>
                      <Texto color="white">Confirmar</Texto>
                    </Button>
                  </LabelComponent>
                </div>
              </Modal>
            </form>
          )}
        </Formik>
      </Middle>
    </Body>
  </>
);

Gerenciar.propTypes = {
  // bla: PropTypes.string,
};

Gerenciar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gerenciar);
