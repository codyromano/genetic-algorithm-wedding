import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/ExperimentStatus/experimentStatus.css';

const ExperimentStatus = ({
  text
}) => {
  return (
    <div className={styles.wrapper}>{text}</div>
  );
};

ExperimentStatus.propTypes = {
  text: PropTypes.string.required
};

export default ExperimentStatus;