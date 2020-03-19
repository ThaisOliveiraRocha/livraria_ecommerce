import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormComponent } from "./UpdateBook.styles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Titulo from "../../components/Title";
import ListarItens from "./components/ListarItens/ListarItens";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import { getBooks } from "../../api";

const listar = () => {
  return getBooks().then(response => {return(response.data)});
};

const UpdateBook = ({ livros }) => {
  console.log(listar());
  return (
    <>
      <FormComponent>
        <Titulo>Lista de Produtos</Titulo>
      </FormComponent>
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
  livros: state.livraria.livros
});

const mapDispatchToProps = dispatch => ({
  //asdf
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);
