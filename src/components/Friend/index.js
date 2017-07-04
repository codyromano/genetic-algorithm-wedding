import React, {PropTypes, Component} from 'react'; //eslint-disable-line

export default class Friend extends Component {
  constructor() {
    super();
    this.state = {
      imagePreloaded: false
    };
  }
  componentDidMount() {
    const preloadImg = document.createElement('img');

    preloadImg.onload = () => this.setState({imagePreloaded: true});
    preloadImg.src = this.props.imageSrc;

    console.log(`Preloading ${preloadImg.src}`);
  }
  render() {
    const { firstName, lastName, imageSrc } = this.props;

    // TODO: Move to CSS file
    const style = {
      height: '50px',
      width: '50px',
      backgroundSize: 'cover',
      display: 'inline-block',
      opacity: 0
    };
    const classList = ['friend'];

    if (this.state.imagePreloaded) {
      style['backgroundImage'] = `url(${imageSrc})`;
      style['opacity'] = 1;
      classList.push('friend-image-preloaded');
    }

    return (
      <div style={style} className={classList.join(' ')}>
        <div className="friend-name">{firstName} {lastName}</div>
      </div>
    );
  }
}

Friend.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};