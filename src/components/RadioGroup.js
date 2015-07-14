import React from 'react';
import classnames from 'classnames';
import Radio from './Radio';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.renderChildren = [];
    this.state = {
      currentValue: this.props.defaultValue,
    };
    this.updateChildren.bind(this);
  }

  onCheckTrue(value) {
    this.setState({
      currentValue: value,
    }, () => {
      this.props.onChange && this.props.onChange(value);
    }.bind(this));
  }

  updateChildren(defaultValue) {
    this.renderChildren = [];
    React.Children.map(this.props.children, (child, index) => {
      let checked = false;
      if (this.state.currentValue === child.props.value) {
        checked = true;
      }
      this.renderChildren.push(React.cloneElement(child, {key: index, index: index, __onCheckTrue: this.onCheckTrue.bind(this, child.props.value), checked: checked}));
    }, this);
  }

  render() {
    this.updateChildren();
    return (
      <div>{this.renderChildren}</div>
    );
  }
}

RadioGroup.propTypes = {
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
  onChange: React.PropTypes.func,
};
RadioGroup.defaultProps = {
  defaultValue: null,
};

export default RadioGroup;
