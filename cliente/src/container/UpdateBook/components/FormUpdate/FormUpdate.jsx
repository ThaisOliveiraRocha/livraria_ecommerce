import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  FormComponent,
  Row,
  ColText,
  ColInput,
  ButtonComponent
} from "./FormUpdate.styles";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { insertBookItem } from "../../../../store/actions";
import { updateBook } from "../../../../api";

const FormUpdate = ({ book }) => (
  <>
    <Formik
      initialValues={
        book !== ''
          ? {
              titulo: `${book.titulo}`,
              imagem: `${book.imagem}`,
              ano: `${book.ano}`,
              preco: `${book.preco}`,
              sinopse: `${book.sinopse}`,
              situacao: `${book.situacao}`
            }
          : {
              titulo: "",
              imagem: "",
              ano: "",
              preco: "",
              sinopse: "",
              situacao: ""
            }
      }
      validate={values => {}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const book = values;

          console.log("dados tela ==> ", book);

          updateBook(book)
            .then(response => {
              const data = response.data;
              console.log(data);
              insertBookItem(data);

              alert(`Item ${data.titulo} inserido com sucesso!`);
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
                value={book.titulo}
                placeholder="Informe o título"
                required
                disabled
              />
            </ColInput>
          </Row>

          <Row>
            <ColText>
              <Titulo>Imagem: </Titulo>
            </ColText>
            <ColInput>
              <Input
                type="text"
                name="imagem"
                onChange={handleChange}
                value={values.imagem}
                placeholder="Informe o nome da imagem"
                required
              />
            </ColInput>
          </Row>
          <Row>
            <ColText>
              <Titulo>Ano: </Titulo>
            </ColText>
            <ColInput>
              <Input
                type="text"
                name="ano"
                onChange={handleChange}
                value={values.ano}
                placeholder="Informe o ano"
                required
              />
            </ColInput>
          </Row>
          <Row>
            <ColText>
              <Titulo>Sinopse: </Titulo>
            </ColText>
            <ColInput>
              <Input
                type="text-area"
                name="sinopse"
                onChange={handleChange}
                value={values.sinopse}
                placeholder="Informe a sinopse"
                required
              />
            </ColInput>
          </Row>
          <Row>
            <ColText>
              <Titulo>Situação: </Titulo>
            </ColText>
            <ColInput>
              <Input
                type="text"
                name="situacao"
                onChange={handleChange}
                value={values.situacao}
                placeholder="Informe a situação"
                required
              />
            </ColInput>
          </Row>
          <Row>
            <ColText>
              <Titulo>Preço: </Titulo>
            </ColText>
            <ColInput>
              <Input
                type="text"
                name="preco"
                onChange={handleChange}
                value={values.preco}
                placeholder="Informe o preço"
                required
              />
            </ColInput>
          </Row>

          <ButtonComponent>
            <Button type="submit" disabled={isSubmitting}>
              <Texto color="white">Confirmar Alteração</Texto>
            </Button>
          </ButtonComponent>
        </form>
      )}
    </Formik>
  </>
);

FormUpdate.propTypes = {
  // bla: PropTypes.string,
};

FormUpdate.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdate);
