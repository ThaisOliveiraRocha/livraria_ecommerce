import React from "react";
import PropTypes from "prop-types";
import { InputItem } from "./Input.styles";

const Input = ({ type, name, onChange, value, place, required }) => (
  <>
    <InputItem
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={place}
      required={required}
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
