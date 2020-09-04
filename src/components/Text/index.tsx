import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const text = ({ value }) => <div className={styles.text}>{value}</div>;

text.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

text.defaultProps = {
  value: "",
};

export default text;
