import React from 'react';
import PropTypes from 'prop-types';
import { TextComponent } from './Text.styles';

const Text = ({children, color, bold}) => (
  <TextComponent color={color} bold={bold}>{children}</TextComponent>
);

Text.propTypes = {
  // bla: PropTypes.string,
};

Text.defaultProps = {
  // bla: 'test',
};

export default Text;
