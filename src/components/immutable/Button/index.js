import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/Button/button.css';

const Button = ({
  text,
  href,
  style
}) => {
  // TODO: Add friends around table
  return (
    <a href={href} style={style} className={styles.button}>{text}</a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Button;