import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { Body } from "./Produtos.styles";
import InsertBook from "../../container/InsertBook";

const Produtos = props => (
  <>
    <GlobalStyles />
    <Body>
      <InsertBook />
    </Body>
  </>
);

Produtos.propTypes = {
  // bla: PropTypes.string,
};

Produtos.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
