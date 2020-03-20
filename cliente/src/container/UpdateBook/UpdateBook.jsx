import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormComponent, Body } from "./UpdateBook.styles";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import ListarItens from "./components/ListarItens";
import FormUpdate from "./components/FormUpdate";
import { getLivros } from "../../store/actions";

const UpdateBook = ({ livros, infoTitleSelect }) => {
  const [value, setState] = React.useState("");

  return (
    <>
      <Body>
        <FormComponent>
          <Titulo>Lista de Livros</Titulo>
          {livros.map((livro, index) => {
            console.log(livro, " --> LIVRO <-- ");
            return <ListarItens key={index} livro={livro} />;
          })}
        </FormComponent>
        <FormComponent>
          <Titulo>Alterar</Titulo>
          <FormUpdate book={infoTitleSelect} />
        </FormComponent>
      </Body>
    </>
  );
};

UpdateBook.propTypes = {
  // bla: PropTypes.string,
};

UpdateBook.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  livros: state.livraria.livros,
  infoTitleSelect: state.livraria.titulo
});

const mapDispatchToProps = dispatch => ({
  getLivrosReducer: livros => {
    dispatch(getLivros(livros));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);
