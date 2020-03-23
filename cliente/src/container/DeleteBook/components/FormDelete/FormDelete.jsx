import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FormComponent,
  Row,
  ColText,
  ColInput,
  ButtonComponent
} from "./FormDelete.styles";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { deleteBook } from "../../../../api";

const FormDelete = ({ book }) => {
  return (
    <>
      <Formik
        initialValues={
          !book
            ? {
                titulo: ""
              }
            : {
                titulo: `${book.titulo}`
              }
        }
        validate={values => {}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const info = values;
            console.log("dados tela ==> ", info);

            deleteBook(info)
              .then(response => {
                const data = response.data;
                console.log("oi");

                alert(`Item excluido com sucesso!`);
              })
              .catch(e => console.log(e));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <ColText>
                <Titulo>Titulo: </Titulo>
              </ColText>
              <ColInput>
                <Input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  value={(values.titulo = book.titulo)}
                  placeholder="Informe o título"
                  required
                  disabled
                />
              </ColInput>
            </Row>

            <ButtonComponent>
              <Button type="submit" disabled={isSubmitting}>
                <Texto color="white">Confirmar Exclusão</Texto>
              </Button>
            </ButtonComponent>
          </form>
        )}
      </Formik>
    </>
  );
};

FormDelete.propTypes = {
  // bla: PropTypes.string,
};

FormDelete.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDelete);
