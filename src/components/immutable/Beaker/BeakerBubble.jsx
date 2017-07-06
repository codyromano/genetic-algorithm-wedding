import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
// TODO: Use absolute path
import styles from 'components/immutable/Beaker/BeakerBubble.css';

class BeakerBubble extends Component {
  componentDidMount() {
    const {onPop, duration} = this.props;
    window.setTimeout(() => onPop(this), duration);
  }

  render() {
    const {initialXPos, radius} = this.props;
    const duration= Math.round(this.props.duration / 1000);

    const inlineStyle = {
      'width': `${radius}px`,
      'height': `${radius}px`,
      'left': `${initialXPos}px`,
      'animationDuration': `${duration}s`
    };

    return (
      <div
        style={inlineStyle}
        className={styles.bubble}
      ></div>
    );
  }
}

BeakerBubble.propTypes = {
  initialXPos: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onPop: PropTypes.func.isRequired,
  radius: PropTypes.number.isRequired
};

export default BeakerBubble;