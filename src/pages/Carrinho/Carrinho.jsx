import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './Carrinho.styles';

const Carrinho = (props) => (
  <div className="CarrinhoWrapper">
    Test content
  </div>
);

Carrinho.propTypes = {
  // bla: PropTypes.string,
};

Carrinho.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carrinho);
