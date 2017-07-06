import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/immutable/DinnerTable/dinnerTable.css';
//import dinnerImage from 'images/dinnerTable.png';

const DinnerTable = ({
  friends
}) => {

  const inlineStyle = {
    //backgroundImage: `url(${dinnerImage})`
  };

  return (
    <div className={styles.table} style={inlineStyle}>
      <div className={styles.friendsWrapper}>
        {friends}
      </div>
    </div>
  );
};

DinnerTable.propTypes = {
  friends: PropTypes.array.isRequired
};

export default DinnerTable;