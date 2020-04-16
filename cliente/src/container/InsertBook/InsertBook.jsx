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
import CurrencyInput from "../../components/CurrencyInput";
import { insertBookItem } from "../../store/actions";
import { insertBook } from "../../api";

const InsertBook = props => (
  <>
    <Formik
      enableReinitialize
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

          insertBook(book)
            .then(response => {
              const data = response.data;
              if(data === "existe"){
                alert(`Titulo ${book.titulo} já está cadastrado!`);
                return;
              }
              console.log(data);
              props.insertBookItem(data);

              alert(`Item ${data.titulo} inserido com sucesso!`);
            })
            .catch(e => console.log(e));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, resetForm }) => (
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
                  placeholder="Informe a imagem"
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
                  type="number"
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
                  placeholder="Informe o preço"
                  name="preco"
                  onChange={handleChange}
                  value={values.preco}
                  required
                />
              </ColInput>
            </Row>

            <ButtonComponent>
              <Button type="submit" onClick={() => resetForm("")} background="#818A96">
                <Texto color="white">Cancelar</Texto>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <Texto color="white">Concluir</Texto>
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
  insertBookItem: book => {
    dispatch(insertBookItem(book));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertBook);
