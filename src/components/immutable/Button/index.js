import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/Button/button.css';
import { Link } from 'react-router-dom';

const Button = ({
  text,
  href,
  style
}) => {
  // TODO: Add friends around table
  return (
    <Link to={href} style={style} className={styles.button}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Button;