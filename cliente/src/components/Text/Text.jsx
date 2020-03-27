import React from "react";
import PropTypes from "prop-types";
import { TextComponent } from "./Text.styles";

const Text = ({ font, children, color, bold }) => {
  return (
    <TextComponent font={font} color={color} bold={bold}>
      {children}
    </TextComponent>
  );
};

Text.propTypes = {
  // bla: PropTypes.string,
};

Text.defaultProps = {
  // bla: 'test',
};

export default Text;
