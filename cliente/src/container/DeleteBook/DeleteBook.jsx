import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Body,
  FormComponentList,
  FormComponentDelete,
  Row
} from "./DeleteBook.styles";
import Titulo from "../../components/Title";
import ListarItens from "../../container/ListarItens";
import FormDelete from "./components/FormDelete";

const DeleteBook = ({ livros, bookSelec }) => {
  return (
    <>
      <Body>
        <FormComponentList>
          <Titulo>Lista de Livros</Titulo>
          {livros.map((livro, index) => {
            return <ListarItens key={index} livro={livro} />;
          })}
        </FormComponentList>
        <FormComponentDelete>
          <Row>
            <Titulo>Excluir Livro</Titulo>
          </Row>
          <FormDelete book={bookSelec} />
        </FormComponentDelete>
      </Body>
    </>
  );
};

DeleteBook.propTypes = {
  // bla: PropTypes.string,
};

DeleteBook.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  livros: state.livraria.vetLivros,
  bookSelec: state.livraria.titulo
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBook);
