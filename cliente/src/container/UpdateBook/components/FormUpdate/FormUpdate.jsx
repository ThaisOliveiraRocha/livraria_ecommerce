import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Texto from "../../../../components/Text";
//import { Test } from './FormUpdate.styles';

const FormUpdate = ({titulo}) => (
  <div className="FormUpdateWrapper">
    <Texto>{titulo}</Texto>
  </div>
);

FormUpdate.propTypes = {
  // bla: PropTypes.string,
};

FormUpdate.defaultProps = {
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
)(FormUpdate);
