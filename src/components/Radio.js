import React from 'react';
import classnames from 'classnames';

const TINY_TIMEOUT = 0.001;
const IS_FOCUSED = 'is-focused';
const IS_DISABLED = 'is-disabled';
const IS_CHECKED = 'is-checked';
const IS_UPGRADED = 'is-upgraded';
const JS_RADIO = 'mdl-js-radio';
const RADIO_BTN = 'mdl-radio__button';
const RADIO_OUTER_CIRCLE = 'mdl-radio__outer-circle';
const RADIO_INNER_CIRCLE = 'mdl-radio__inner-circle';
const RIPPLE_EFFECT = 'mdl-js-ripple-effect';
const RIPPLE_IGNORE_EVENTS = 'mdl-js-ripple-effect--ignore-events';
const RIPPLE_CONTAINER = 'mdl-radio__ripple-container';
const RIPPLE_CENTER = 'mdl-ripple--center';
const RIPPLE = 'mdl-ripple';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };

    this.boundLabelClick = this.onClick_.bind(this);
    this.boundLabelMouseUp = this.onMouseUp_.bind(this);
    this.boundInputChange = this.onChange_.bind(this);
    this.boundInputFocus = this.onFocus_.bind(this);
    this.boundInputBlur = this.onBlur_.bind(this);
  }

  onClick_(event) {
    if (!!this.props.disabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    if (!this.props.checked) {
      this.props.__onCheckTrue && this.props.__onCheckTrue();
    }
  }

  onChange_() {

  }

  onFocus_() {
    this.setState({
      isFocused: true,
    });
  }

  onBlur_() {
    this.setState({
      isFocused: false,
    });
  }

  onMouseUp_() {
    window.setTimeout(() => {
      this.mainElement.blur();
    }.bind(this), TINY_TIMEOUT);
  }

  render() {
    const labelClass = classnames(IS_UPGRADED, {
      'mdl-radio mdl-js-radio': true,
      'mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events': this.props.ripple,
      'is-disabled': this.props.disabled,
      'is-checked': this.props.checked,
    });
    const rippleContainerClass = classnames(RIPPLE_EFFECT, RIPPLE_CENTER);

    let rippleContainer;
    if (this.props.ripple) {
      rippleContainer = (
        <span className={rippleContainerClass}>
          <span className={RIPPLE}></span>
        </span>
      );
    }

    return (
      <label style={this.props.style} className={labelClass + ' ' + this.props.class} onMouseUp={this.boundLabelMouseUp} onClick={this.boundLabelClick}>
        <input ref="mainElement" onBlur={this.boundInputBlur} onChange={this.boundInputChange} onFocus={this.boundInputFocus} type="radio" className="mdl-radio__button" name="options" value="1" checked={this.props.checked} />
        <span className="mdl-radio__label">{this.props.label}</span>
        <span className={RADIO_OUTER_CIRCLE}></span>
        <span className={RADIO_INNER_CIRCLE}></span>
        {rippleContainer}
      </label>
    );
  }

  componentDidMount() {
    this.mainElement = this.refs.mainElement.getDOMNode();
  }
}

Radio.propTypes = {
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  checked: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  disabled: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  class: React.PropTypes.string,
  style: React.PropTypes.object,
};

Radio.defaultProps = {
  label: null,
  checked: false,
  disabled: false,
  class: '',
  style: {},
};

export default Radio;
