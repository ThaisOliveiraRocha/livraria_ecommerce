import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./Button.styles";
import Texto from "../Text";

const Button = ({ children, background, onClick, width, className, type, disabled }) => (
  <ButtonComponent
    background={background}
    onClick={onClick}
    type={type}
    width={width}
    className={className}
    disabled = {disabled}
  >
    <Texto>{children}</Texto>
  </ButtonComponent>
);

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
