import React from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import styles from 'components/FeatureSet/featureSet.css';
import getFeatureDescriptor from 'experiment/helpers/getFeatureDescriptor';

const FeatureSet = ({
  features
}) => {

  const rows = [];
  for (const [feature, value] of Object.entries(features)) {
    const item = (
      <div className={styles.label}>
        {getFeatureDescriptor(feature, value)}
      </div>
    );
    rows.push(item);
  }

  return (
    <div className={styles.featureSet}>
      {rows}
    </div>
  );
};

FeatureSet.propTypes = {
  features: PropTypes.object.isRequired
};

export default FeatureSet;