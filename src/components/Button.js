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

  render() {
    let rippleContainer;
    if (this.props.ripple) {
      rippleContainer = (
        <span className={RIPPLE_CONTAINER}>
          <span onMouseUp={this.boundRippleBlurHandler} className={RIPPLE}></span>
        </span>
      );
    }
    return (
      <button onMouseUp={this.boundButtonBlurHandler} onMouseLeave={this.boundButtonBlurHandler} ref="mainElement" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" disabled={this.props.disabled}>
        <i className="material-icons">add</i>
        {rippleContainer}
      </button>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.boundRippleBlurHandler = this.blurHandler.bind(this);
    this.boundButtonBlurHandler = this.blurHandler.bind(this);
  }

  componentDidMount() {
    this.mainElement = this.refs.mainElement.getDOMNode();
  }
}

Button.propTypes = {

};

export default Button;
