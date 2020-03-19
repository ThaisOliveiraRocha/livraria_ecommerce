import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Texto from "../../../../components/Text";
//import { Test } from './ListarItens.styles';

const ListarItens = livro => (
  <>
    {livro.map((l, index) => {
      return <Texto>{l.titulo}</Texto>;
    })}
  </>
);

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
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListarItens);
