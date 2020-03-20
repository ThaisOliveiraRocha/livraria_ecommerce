import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Texto from "../../../../components/Text";
import { setTitulo } from "../../../../store/actions";
//import { Test } from './ListarItens.styles';

const ListarItens = ({ livro, setTitulo }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index, titulo) => {
    setTitulo(titulo);
    setSelectedIndex(index);
  };
  return (
    <>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={event => handleListItemClick(event, 1, livro.titulo)}
      >
        <ListItemText primary={livro.titulo} style={{ textAlign: "center" }} />
      </ListItem>
      <Divider />
    </>
  );
};

ListarItens.propTypes = {
  // bla: PropTypes.string,
};

ListarItens.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  setTitulo: titulo => {
    dispatch(setTitulo(titulo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListarItens);
