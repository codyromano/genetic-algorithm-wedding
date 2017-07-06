import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
// TODO: Use absolute path
import styles from 'components/immutable/Beaker/Beaker.css';
import BeakerLiquid from 'components/immutable/Beaker/BeakerLiquid.jsx';
import BeakerBubbleFactory from 'components/mutable/Beaker/BeakerBubbleFactory.jsx';
import BeakerGraphic from 'components/immutable/Beaker/BeakerGraphic.jsx';

class Beaker extends Component {
  render() {
    const {
      width,
      height,
      percentFilled,
      bubbleOptions,
      spawnFrequency
    } = this.props;

    const inlineStyle = {
      'width': `${width}px`,
      'height': `${height}px`
    };

    return (
      <div style={inlineStyle} className={styles.wrapper}>
        <BeakerGraphic/>
        <BeakerLiquid percentFilled={percentFilled}/>
        <BeakerBubbleFactory
          bubbleOptions={bubbleOptions}
          percentHeight={percentFilled}
          spawnFrequency={spawnFrequency}
        />
      </div>
    );
  }
}

Beaker.defaultProps = {
  width: 150,
  height: 150,
  spawnFrequency: 500,
  bubbleOptions: {
    radius: 100
  }
};

Beaker.propTypes = {
  percentFilled: PropTypes.number.isRequired,
  spawnFrequency: PropTypes.number,
  // TODO: Define shape
  bubbleOptions: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};


export default Beaker;