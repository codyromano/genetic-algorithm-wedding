import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import styles from 'components/immutable/Beaker/BeakerLiquid.css';

const BeakerLiquid = ({
  percentFilled
}) => {

  // Cap upper height to account for tilting animation (looks weird at 100)
  const height = Math.min(95, percentFilled) + '%';
  const inlineStyle = {height};

  return (
    <div style={inlineStyle} className={styles.fillWrapper}>
      <div className={styles.fill}></div>
    </div>
  );
};

BeakerLiquid.propTypes = {
  percentFilled: PropTypes.number.isRequired
};

export default BeakerLiquid;