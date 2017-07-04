import React, { Component } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from 'components/Friend/friend.css';
import FeatureSet from 'components/FeatureSet'; //eslint-disable-line
import { rand } from 'utils';

export default class Friend extends Component {
  constructor() {
    super();
    this.state = {
      imagePreloaded: false
    };
  }

  onImagePreloaded() {
    window.setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.friendEl).classList.add(
        styles.friendImagePreloaded
      );

    // Staggering the fade-in improves the aesthetic
    }, rand(1, 1000 * 6));

    this.setState({imagePreloaded: true});
  }

  componentDidMount() {
    const preloadImg = document.createElement('img');

    preloadImg.onload = () => this.onImagePreloaded();
    preloadImg.src = this.props.imageSrc;
  }
  render() {
    const { firstName, imageSrc, features} = this.props;

    const style = {};
    if (this.state.imagePreloaded) {
      style['backgroundImage'] = `url(${imageSrc})`;
    }

    return (
      <div style={style} className={styles.friend} ref="friendEl">
        <div className={styles.friendName}>{firstName}</div>
        {this.state.showStats && <FeatureSet features={features}/>}
      </div>
    );
  }
}

Friend.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  features: PropTypes.object.isRequired
};