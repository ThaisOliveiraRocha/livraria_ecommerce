import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./Button.styles";
import Texto from "../Text";

const Button = ({ children, background, onClick, width, className }) => (
  <ButtonComponent
    background={background}
    onClick={onClick}
    width={width}
    className={className}
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
