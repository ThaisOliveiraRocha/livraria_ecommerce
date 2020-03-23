import React from "react";
import PropTypes from "prop-types";
import { InputItem } from "./Input.styles";

const Input = ({ type, name, onChange, value, placeholder, required, disabled }) => (
  <>
    <InputItem
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  </>
);

Input.propTypes = {
  // bla: PropTypes.string,
};

Input.defaultProps = {
  // bla: 'test',
};

export default Input;
