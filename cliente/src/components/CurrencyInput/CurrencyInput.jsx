import React from "react";
import CurrencyInput from "react-currency-input";

const CurrencyInputComponent = ({placeholder, name, value, prefix, decimalSeparator, required}) => (
  <>
    <CurrencyInput
    style={InputItem}
      placeholder={placeholder}
      name={name}
      value={value}
      prefix={!prefix === "" ? prefix : "R$"}
      decimalSeparator={!decimalSeparator === "" ? decimalSeparator : ","}
      required={required}
    />
  </>
);

const InputItem = {
  width: '80%',
  height: '25px',
  borderRadius: '2px',
  border: '1px solid rgba(157, 171, 181)',
  backgroundColor: '#f1f3f4',
  color: 'rgba(57, 59, 60)',
  fontWeight: '400',
  textAlign: 'center'
}

export default CurrencyInputComponent;
