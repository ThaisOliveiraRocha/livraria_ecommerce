import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './DeleteBook.styles';

const DeleteBook = (props) => (
  <div className="DeleteBookWrapper">
    Test content
  </div>
);

DeleteBook.propTypes = {
  // bla: PropTypes.string,
};

DeleteBook.defaultProps = {
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
)(DeleteBook);
