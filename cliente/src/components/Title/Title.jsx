import React from 'react';
import PropTypes from 'prop-types';
import { Titulo } from './Title.styles';

const Title = ({children, font, color, grow}) => (
  <Titulo font={font} color={color} grow={grow}>{children}</Titulo>
);

Title.propTypes = {
  // bla: PropTypes.string,
};

Title.defaultProps = {
  // bla: 'test',
};

export default Title;
