import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i className="material-icons">add</i>
            </button>
        );
    }
}

export default Button;