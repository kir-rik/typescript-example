import React from "react";
import PropTypes from "prop-types";

const button = ({ handleClick, title }) => (
  <button onClick={handleClick}>{title}</button>
);

button.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

button.defaultProps = {
  handleClick: () => {},
  title: "",
};

export default button;
