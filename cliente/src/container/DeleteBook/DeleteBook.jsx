import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Body, FormComponent } from './DeleteBook.styles';
import Titulo from "../../components/Title";
import ListarItens from '../UpdateBook/components/ListarItens';
import FormDelete from './components/FormDelete';

const DeleteBook = ({livros, bookSelec}) =>{

  return (
    <>
      <Body>
        <FormComponent>
          <Titulo>Lista de Livros</Titulo>
          {livros.map((livro, index) => {
            return <ListarItens key={index} livro={livro} />;
          })}
        </FormComponent>
        <FormComponent>
          <Titulo>Excluir Livro</Titulo>
          <FormDelete book={bookSelec}/>
        </FormComponent>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteBook);
