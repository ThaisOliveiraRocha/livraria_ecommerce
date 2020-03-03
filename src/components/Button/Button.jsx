import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './Button.styles';

const Button = ({children, background, onClick, width}) => (
    <ButtonComponent background={background} onClick={onClick} width={width}>{children}</ButtonComponent>
);

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
