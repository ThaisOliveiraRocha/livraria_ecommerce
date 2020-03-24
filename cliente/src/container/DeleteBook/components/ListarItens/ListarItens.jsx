import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setTitulo } from "../../../../store/actions";
import { Collapse, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
//import { Test } from './ListarItens.styles';

const ListarItens = ({ livro, setTitulo }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClick = (event, index, livro) => {
    setTitulo(livro);
    setSelectedIndex(index);
    setOpen(!open);
  };
  return (
    <>
      <ListItem
        button
        onClick={event => handleClick(event, 1, livro)}
        selected={selectedIndex === 1}
      >
        <ListItemText primary={livro.titulo} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ width: "100%" }}
      >
        <List component="div" disablePadding>
          <ListItem
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <ListItemText secondary={`Imagem: ${livro.imagem}`} />
            <ListItemText secondary={`Ano: ${livro.ano}`} />
            <ListItemText secondary={`Sinopse: ${livro.sinopse.substr(0, 100)}...`} />
            <ListItemText secondary={`Situação: ${livro.situacao}`} />
            <ListItemText secondary={`Preço: R$${livro.preco}`} />
          </ListItem>
        </List>
      </Collapse>
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
  setTitulo: book => {
    dispatch(setTitulo(book));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListarItens);
