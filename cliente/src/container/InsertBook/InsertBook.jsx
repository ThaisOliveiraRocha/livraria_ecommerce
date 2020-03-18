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
} from "./InsertBook.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Input from "../../components/Input";
import { addEditCarrinho } from "../../store/actions";
import { insertBook } from "../../api";

const InsertBook = props => (
  <>
    <Formik
      initialValues={{
        imagem: "",
        titulo: "",
        autor: "",
        ano: "",
        genero: "",
        preco: "",
        sinopse: "",
        situacao: ""
      }}
      validate={values => {}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const book = values;

          console.log("dados tela ==> ", book);

          insertBook(book)
            .then(response => {
              const data = response.data;
              console.log(data);
              props.addEditCarrinho(data);

              values = "";
            })
            .catch(e => console.log(e));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FormComponent>
            <Titulo>Cadastrar Novo Livro</Titulo>

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
                <Titulo>Titulo: </Titulo>
              </ColText>
              <ColInput>
                <Input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  value={values.titulo}
                  placeholder="Informe o título"
                  required
                />
              </ColInput>
            </Row>
            <Row>
              <ColText>
                <Titulo>Autor: </Titulo>
              </ColText>
              <ColInput>
                <Input
                  type="text"
                  name="autor"
                  onChange={handleChange}
                  value={values.autor}
                  placeholder="Informe o autor"
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
                <Titulo>Gênero: </Titulo>
              </ColText>
              <ColInput>
                <Input
                  type="text"
                  name="genero"
                  onChange={handleChange}
                  value={values.genero}
                  placeholder="Informe o gênero"
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
                <Texto color="white">Incluir</Texto>
              </Button>
            </ButtonComponent>
          </FormComponent>
        </form>
      )}
    </Formik>
  </>
);

InsertBook.propTypes = {
  // bla: PropTypes.string,
};

InsertBook.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  addEditCarrinho: book => {
    dispatch(addEditCarrinho(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertBook);
