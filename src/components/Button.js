import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
        <i className="material-icons">add</i>
      </button>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
}

export default Button;
