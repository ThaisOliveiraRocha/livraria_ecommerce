import React, { useState } from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./Button.styles";

const Button = ({
  children,
  color,
  background,
  onClick,
  width,
  className,
  type,
  disabled
}) => {
  return (
    <ButtonComponent
      background={background}
      onClick={onClick}
      type={type}
      width={width}
      className={className}
      disabled={disabled}
      color={color}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
