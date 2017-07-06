import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
// TODO: Use absolute path
import beakerImage from 'components/immutable/Beaker/base.png';
import styles from 'components/immutable/Beaker/BeakerGraphic.css';

const BeakerImage = () => (
  <img src={beakerImage} className={styles.graphic}/>
);

export default BeakerImage;