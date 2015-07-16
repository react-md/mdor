import React from 'react';
import Ripple from './Ripple';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state= {};
  }

  render() {
    return (
      <button ref="mainElement" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
        <i className="material-icons">add</i>
        <Ripple className="mdl-button__ripple-container"/>
      </button>
    );
  }
}

export default Button;
