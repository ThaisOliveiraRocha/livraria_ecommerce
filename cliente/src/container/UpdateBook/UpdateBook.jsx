import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './UpdateBook.styles';

const UpdateBook = (props) => (
  <div className="UpdateBookWrapper">
    Test content
  </div>
);

UpdateBook.propTypes = {
  // bla: PropTypes.string,
};

UpdateBook.defaultProps = {
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
)(UpdateBook);
