import React from 'react';
import Constants from '../lib/Constants';

// ignore: false, hierarchical: false => button
// ignore: true, hierarchical: false => checkbox, icon-toggle, radio, switch, menu
// ignore: true, hierarchical: true => menu (menu_item), layout (tab)

class Ripple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.props = {};
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
    }

    onMouseUp_(event) {
        event.target.blur();
        
    }

    render() {
        return (
            <span className={Constants.Ripple.RIPPLE_CONTAINER}>
                <span className={Constants.Ripple.RIPPLE} onMouseUp={this.boundMouseUpHandler}>
                </span>
            </span>
        );
    }
};

Ripple.propTypes = {
    recentering: React.PropTypes.bool,
    ignoreEvents: React.PropTypes.bool,
};
Ripple.defaultProps = {
    recentering: false,
    ignoreEvents: false,
};


export default Ripple;
