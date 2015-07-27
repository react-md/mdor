import React, {PropTypes} from 'react';
import classnames from 'classnames';

class Badge extends React.Component {
  render() {
    let classString;
    let classObject = {
      'icon material-icons': !!this.props.iconify,
    };
    if (this.props.className) {
      classObject[this.props.className] = true;
    }
    classString = classnames('mdl-badge', classObject);

    return (
      <div className={classString} style={this.props.style} data-badge={this.props.icon}>{this.props.children}</div>
    );
  }
}

Badge.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.object,
};

Badge.defaultProps = {
  style: {
    display: 'inline-block',
  }
};

export default Badge;
