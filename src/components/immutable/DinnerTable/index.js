import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/DinnerTable/dinnerTable.css';
import dinnerImage from 'images/dinnerTable.png';

const DinnerTable = ({
  friends
}) => {
  // TODO: Add friends around table
  return (
    <div className={styles.table}>
      <img src={dinnerImage}/>
    </div>
  );
};

DinnerTable.propTypes = {
  friends: PropTypes.array.isRequired
};

export default DinnerTable;