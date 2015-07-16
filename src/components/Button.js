import React from 'react';
import classnames from 'classnames';

const RIPPLE_EFFECT = 'mdl-js-ripple-effect';
const RIPPLE_CONTAINER = 'mdl-button__ripple-container';
const RIPPLE = 'mdl-ripple';

class Button extends React.Component {
  blurHandler(event) {
    if (event) {
      this.mainElement.blur();
    }
  }

  buttonOnClick() {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const buttonClass = classnames({
      'mdl-button mdl-js-button': true,
      'mdl-button--fab': this.props.type === 'fab' || this.props.type === 'mini-fab',
      'mdl-button--mini-fab': this.props.type ==='mini-fab',
      'mdl-button--colored': !!this.props.colored,
      'mdl-button--accent': !!this.props.accent,
      'mdl-button--primary': !!this.props.primary,
      'mdl-button--raised': this.props.type === 'raise',
    });
    let rippleContainer;
    if (this.props.ripple) {
      rippleContainer = (
        <span className={RIPPLE_CONTAINER}>
          <span onMouseUp={this.boundRippleBlurHandler} className={RIPPLE}></span>
        </span>
      );
    }
    return (
      <button onClick={this.props.onClick} onMouseUp={this.boundButtonBlurHandler} onMouseLeave={this.boundButtonBlurHandler} ref="mainElement" className={buttonClass} disabled={this.props.disabled}>
        {this.props.children}
        {rippleContainer}
      </button>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.boundRippleBlurHandler = this.blurHandler.bind(this);
    this.boundButtonBlurHandler = this.blurHandler.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  componentDidMount() {
    this.mainElement = this.refs.mainElement.getDOMNode();
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  colored: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  disabled: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
};

Button.defaultProps = {
  disabled: false,
  colored: false,
};

export default Button;
