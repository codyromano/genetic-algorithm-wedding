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
      <p>Generation {generation}: {text}</p>
      <p>Personality variance: {fitness}</p>
    </div>
  );
};

ExperimentStatus.propTypes = {
  text: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
  fitness: PropTypes.number.isRequired
};

export default ExperimentStatus;