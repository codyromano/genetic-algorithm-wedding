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
    this.handleGeneSelection = this.handleGeneSelection.bind(this);
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

  handleGeneSelection() {
    this.props.onClick(this.props.id);
  }

  render() {
    const {
      firstName,
      imageSrc,
      features,
      fadeEffect,
      showFeatureSet
    } = this.props;

    const style = Object.assign({}, this.props.style);
    if (this.state.imagePreloaded) {
      style['backgroundImage'] = `url(${imageSrc})`;
    }
    const classList = [styles.friend];
    if (fadeEffect) {
      classList.push(styles.fadeEffect);
    }

    return (
      <div
        style={style}
        onMouseEnter={this.handleGeneSelection}
        className={styles.friend}
        ref="friendEl">
        {showFeatureSet && <FeatureSet
          firstName={firstName}
          features={features}
        />}
      </div>
    );
  }
}

Friend.defaultProps = {
  style: {},
  onClick: () => {},
  showFeatureSet: false
};

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  features: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  showFeatureSet: PropTypes.bool,
  style: PropTypes.object,
  fadeEffect: PropTypes.string
};