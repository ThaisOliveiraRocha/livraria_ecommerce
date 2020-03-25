import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FormComponent,
  Row,
  ColText,
  ColInput,
  ButtonComponent,
  Form
} from "./FormDelete.styles";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { deleteBook, getBooks } from "../../../../api";
import { getLivros } from "../../../../store/actions";

const FormDelete = ({ book }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={
          !book
            ? {
                titulo: ""
              }
            : {
                titulo: book.titulo
              }
        }
        validate={values => {}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            deleteBook(values)
              .then(response => {
                getBooks().then(response => {
                  const data = response.data;
                  console.log(data);
                  getLivros(data);
                });
                alert(`Livro ${values.titulo} excluido com sucesso!`);
              })
              .catch(e => console.log(e));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, resetForm }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <ColText>
                <Titulo>Titulo: </Titulo>
              </ColText>
              <ColInput>
                <Input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  value={
                    book.titulo === ""
                      ? values.titulo
                      : (values.titulo = book.titulo)
                  }
                  placeholder="Informe o título"
                  required
                  disabled
                />
              </ColInput>
            </Row>
            <ButtonComponent>
              <Button
                type="submit"
                onClick={() => resetForm("")}
                background="#818A96"
              >
                <Texto color="white">Cancelar</Texto>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <Texto color="white">Concluir</Texto>
              </Button>
            </ButtonComponent>
          </Form>
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
  getLivros: livros => {
    dispatch(getLivros(livros));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDelete);
