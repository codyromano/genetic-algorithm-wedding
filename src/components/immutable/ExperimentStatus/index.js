import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/ExperimentStatus/experimentStatus.css';

const ExperimentStatus = ({
  text,
  generation
}) => {
  return (
    <div className={styles.wrapper}>
      Generation {generation}: {text}
    </div>
  );
};

ExperimentStatus.propTypes = {
  text: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired
};

export default ExperimentStatus;