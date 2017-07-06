import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/ExperimentStatus/experimentStatus.css';

const ExperimentStatus = ({
  text,
  generation,
  fitness
}) => {
  return (
    <div className={styles.wrapper}>
      <strong>Running experiment #{generation}</strong>
      <p>Total personality variance: {fitness.toPrecision(6)}</p>
      <p className={styles.status}>{text}</p>
    </div>
  );
};

ExperimentStatus.propTypes = {
  text: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
  fitness: PropTypes.number.isRequired
};

export default ExperimentStatus;